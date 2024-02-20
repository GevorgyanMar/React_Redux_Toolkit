import { STORES } from "../constants/constants";
import { createDefer } from "../helpers";

const DB_NAME = "my-db";
const DB_VERSION = 1;

class DBConnectionProvider {
  private db: IDBDatabase | null = null;
  private isDBOpenedDefer = createDefer<void>();

  constructor() {
    this.openDB();
  }

  private openDB() {
    if (this.db) return;

    const indexedDB =
      window.indexedDB ||
      (window as any).mozIndexedDB ||
      (window as any).webkitIndexedDB ||
      (window as any).msIndexedDB ||
      (window as any).shimIndexedDB;

    if (!indexedDB) {
      console.error("Browser does not support IndexedDB");
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = this.onError;
    request.onupgradeneeded = this.onUpgradeNeeded;
    request.onsuccess = this.onSuccess;
  }

  private onError = (event: Event) => {
    const { code, message, name } =
      (event.target as IDBOpenDBRequest).error || {};
    console.error(`Error code - ${code}: ${message}, ${name}`);
  };

  private onUpgradeNeeded = async (event: IDBVersionChangeEvent) => {
    this.db = (event.target as IDBOpenDBRequest).result;

    STORES.forEach(({ name, keyPath }) => {
      if (!this.db!.objectStoreNames.contains(name)) {
        console.log(`Creating object store: ${name}`);
        this.db!.createObjectStore(name, { keyPath });
      }
    });

    this.isDBOpenedDefer.resolve();
  };

  private onSuccess = (event: Event) => {
    this.db = (event.target as IDBOpenDBRequest).result;
    this.isDBOpenedDefer.resolve();
    console.log("IndexedDB is opened.");
  };

  async getItems<T>(storeName: string): Promise<T[] | undefined> {
    await this.isDBOpenedDefer.promise;
    if (!this.db) return;

    if (!this.db.objectStoreNames.contains(storeName)) {
      console.error(`Object store "${storeName}" not found.`);
      return;
    }

    const transaction = this.db.transaction(storeName, "readonly");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.getAll();

    return new Promise<T[]>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () =>
        reject(new Error(`Can not get items from ${storeName}.`));
    });
  }

  async addItem<T>(item: T, storeName: string): Promise<T | undefined> {
    await this.isDBOpenedDefer.promise;
    if (!this.db) return;

    if (!this.db.objectStoreNames.contains(storeName)) {
      console.error(`Object store "${storeName}" not found.`);
      return;
    }

    const transaction = this.db.transaction(storeName, "readwrite");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.add(item);

    return new Promise<T>((resolve, reject) => {
      request.onsuccess = () => resolve(item);
      request.onerror = () =>
        reject(new Error(`Item is not added to ${storeName}.`));
    });
  }
}

export const dbConnectionProvider = new DBConnectionProvider();

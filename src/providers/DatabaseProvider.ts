class DbConnection {
  private db: IDBDatabase | null = null;

  openDB() {
    const request = window.indexedDB.open("videoDatabase", 1);

    request.onsuccess = (event) => {
      this.db = (event.target as IDBRequest<IDBDatabase>).result;
      console.log("Database connection opened.");
    };

    request.onerror = (event) => {
      console.error(
        "Error opening IndexedDB:",
        (event.target as IDBRequest).error
      );
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const store = db.createObjectStore("videoStream", {
        autoIncrement: true,
      });
      console.log("Database upgrade needed");
    };
  }

  async addItem(itemData: any) {
    if (!this.db) {
      console.error("Database is not open.");
      return;
    }

    try {
      const transaction = this.db.transaction(["videoDatabase"], "readwrite");
      const store = transaction.objectStore("videoDatabase");
      await store.add(itemData);
      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  async getAllItems() {
    if (!this.db) {
      console.error("Database is not open.");
      return;
    }

    try {
      const transaction = this.db.transaction(["videoStream"], "readonly");
      const store = transaction.objectStore("videoStream");
      const items = await store.getAll();
      console.log("All items retrieved:", items);
      return items;
    } catch (error) {
      console.error("Error retrieving items:", error);
    }
  }
}

export const dbConnection = new DbConnection();

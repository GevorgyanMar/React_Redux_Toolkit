import { STORE_NAMES } from "../constants/constants";
import { Chunk } from "../types/types";
import { dbConnectionProvider } from "./DBConnectionProvider";

class RecordingDBProvider {
  async getItems(): Promise<Chunk[] | undefined> {
    const items = await dbConnectionProvider.getItems<Chunk[]>(
      STORE_NAMES.RECORDING
    );
    return items ? items.reduce((acc, val) => acc.concat(val), []) : undefined;
  }

  async addItem(chunk: Chunk): Promise<Chunk | undefined> {
    return dbConnectionProvider.addItem<Chunk>(chunk, STORE_NAMES.RECORDING);
  }
}

export const recordingDBProvider = new RecordingDBProvider();

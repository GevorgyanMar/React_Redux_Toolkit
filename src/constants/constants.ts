export const TIME_EVENTS = {
  ON_UPDATE: "ON_UPDATE",
};

type StoreModel = {
  name: string;
  keyPath: string;
};

export const STORE_NAMES = {
  RECORDING: "recording",
};

export const STORE_KEY_PATHS = {
  CHUNK_ID: "chunkId",
};

export const STORES: StoreModel[] = [
  {
    name: STORE_NAMES.RECORDING,
    keyPath: STORE_KEY_PATHS.CHUNK_ID,
  },
];

export const Message_Types = {
  NEW_MESSAGE: "new_message",
  LOAD_MESSAGES: "load_messages",
};

export const Messages_Event_Types = {
  ADD_MESSAGE: "add_message",
  UPDATE_MESSAGES: "update_messages",
};

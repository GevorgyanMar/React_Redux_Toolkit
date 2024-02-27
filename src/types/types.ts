export type Chunk = {
  chunkId: number;
  data: Blob;
};

export type Defer<T> = {
  promise: Promise<T> | null;
  resolve: (val?: T) => void;
  reject: (err: any) => void;
  reset: () => void;
};

export type Message = {
  id: number;
  username: string;
  content: string;
  date: string;
};

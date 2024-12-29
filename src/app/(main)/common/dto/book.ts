export type Book = {
  id: number;
  title: string;
  count: number;
  writerId: number;
};

export type BookDto = {
  title?: string;
  count: number;
  writerId: number;
};

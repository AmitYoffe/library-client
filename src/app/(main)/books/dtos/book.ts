import { Writer } from "../../writers/dtos/writer";

export type Book = {
  id: number;
  title: string;
  count: number;
  writer: Writer;
  //   borrows: Borrow[];
};

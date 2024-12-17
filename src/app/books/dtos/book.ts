import { Writer } from "@/app/writers/dtos/writer";

export type Book = {
  id: number;
  title: string;
  count: number;
  writer: Writer;
//   borrows: Borrow[];
};

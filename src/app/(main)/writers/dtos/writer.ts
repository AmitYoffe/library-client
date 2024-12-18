import { Book } from "../../books/dtos/book";

export type Writer = {
  id: number;
  firstName: string;
  lastName: string;
  books: Book[];
};

import { Book } from "@/app/books/dtos/book";

export type Writer = {
  id: number;
  firstName: string;
  lastName: string;
  books: Book[];
};

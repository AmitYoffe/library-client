import { Box } from "@mui/material";
import { Book } from "../dtos/book";

type BookItemType = {
  book: Book;
};

export const BookItem = ({ book }: BookItemType) => {
  return (
    <>
      <Box>Nigger</Box>
      <Box>{book.id}</Box>
    </>
  );
};

import { Typography } from "@mui/material";
import { Book } from "../../books/dtos/book";
import { StyledBooksByWriterRowBox } from "./styled";

type BooksByWriterRowProps = {
  book: Book;
};

export function BooksByWriterRow({ book }: BooksByWriterRowProps) {
  return (
    <StyledBooksByWriterRowBox>
      <Typography>{book.title}</Typography>
      <Typography>{book.id}</Typography>
    </StyledBooksByWriterRowBox>
  );
}

import { Book } from "@/app/(main)/books/dtos/book";
import { Typography } from "@mui/material";
import { StyledBooksByWriterRowBox } from "../styled";

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

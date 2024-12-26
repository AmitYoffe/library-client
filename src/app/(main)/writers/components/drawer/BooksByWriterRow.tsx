import { StyledIdTypography } from "@/app/(main)/books/components/styled";
import { Book } from "@/app/(main)/common/dto/book";
import { Typography } from "@mui/material";
import { StyledBooksByWriterRowBox } from "../styled";

type BooksByWriterRowProps = {
  book: Book;
};

export const BooksByWriterRow = ({ book }: BooksByWriterRowProps) => {
  return (
    <StyledBooksByWriterRowBox>
      <Typography>{book.title}</Typography>
      <StyledIdTypography>{book.id}</StyledIdTypography>
    </StyledBooksByWriterRowBox>
  );
};

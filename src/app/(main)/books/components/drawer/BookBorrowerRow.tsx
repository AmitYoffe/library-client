import { TerminateBorrowDialog } from "@/app/(main)/borrows/components/TerminateBorrowDialog";
import { User } from "@/app/api/users/dto/user";
import { Typography } from "@mui/material";
import { StyledBookBorrowerRowBox, StyledIdTypography } from "../styled";
import { Book } from "@/app/(main)/common/dto/book";

type BookBorrowerRowProps = {
  borrower: User;
  book: Book;
};

export const BookBorrowerRow = ({ borrower, book }: BookBorrowerRowProps) => {
  return (
    <>
      <StyledBookBorrowerRowBox>
        <Typography>{borrower.username}</Typography>
        <StyledIdTypography>{borrower.id}</StyledIdTypography>
      </StyledBookBorrowerRowBox>
      <TerminateBorrowDialog borrower={borrower} book={book} />
    </>
  );
};

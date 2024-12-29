import { TerminateBorrowDialog } from "@/app/(main)/borrows/components/TerminateBorrowDialog";
import { User } from "@/app/api/users/dto/user";
import { Typography } from "@mui/material";
import { StyledBookBorrowerRowBox, StyledIdTypography } from "../styled";
import { Book } from "@/app/(main)/common/dto/book";

type BookBorrowerRowProps = {
  user: User;
  book: Book;
};

export const BookBorrowerRow = ({ user, book }: BookBorrowerRowProps) => {
  return (
    <>
      <StyledBookBorrowerRowBox>
        <Typography>{user.username}</Typography>
        <StyledIdTypography>{user.id}</StyledIdTypography>
      </StyledBookBorrowerRowBox>
      <TerminateBorrowDialog user={user} book={book} />
    </>
  );
};

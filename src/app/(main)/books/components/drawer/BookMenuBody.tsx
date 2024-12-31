import { BookBorrowersList } from "@/app/(main)/books/components/drawer/BookBorrowersList";
import { BorrowBookDialog } from "@/app/(main)/borrows/components/BorrowBookDialog";
import { StyledMenuBox } from "@/app/(main)/common/components/styled";
import { useGetBorrowers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { Box, Typography } from "@mui/material";
import { Book } from "../../../common/dto/book";

type BookMenuBodyProps = {
  book: Book;
};

export const BookMenuBody = ({ book }: BookMenuBodyProps) => {
  const { data, isLoading, error } = useGetBorrowers(book.id);
  const borrowers: User[] = data?.data || [];

  return (
    <Box padding={2}>
      <StyledMenuBox>
        <Typography fontSize={20}>רשימת קוראים ({borrowers.length})</Typography>
        <BorrowBookDialog bookId={book.id} />
      </StyledMenuBox>
      <BookBorrowersList
        borrowers={borrowers}
        isLoading={isLoading}
        error={error}
        book={book}
      />
    </Box>
  );
};

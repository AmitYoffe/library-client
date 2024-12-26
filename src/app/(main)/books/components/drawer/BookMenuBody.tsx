import { BookBorrowersList } from "@/app/(main)/books/components/drawer/BookBorrowersList";
import { StyledMenuBox } from "@/app/(main)/common/components/styled";
import { useGetBorrowers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { Box, Button, Typography } from "@mui/material";
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
        <Typography fontSize={20}>רשימת ספרים ({borrowers.length})</Typography>
        <Button variant="contained">הוסף ספר</Button>
      </StyledMenuBox>
      <BookBorrowersList
        borrowers={borrowers}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};

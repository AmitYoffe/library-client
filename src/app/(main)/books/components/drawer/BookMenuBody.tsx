import { BookBorrowersList } from "@/app/(main)/books/components/drawer/BookBorrowersList";
import { StyledMenuBox } from "@/app/(main)/components/dialogs/itemMenu/styled";
import { useGetBorrowers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Book } from "../../dtos/book";

type BookMenuBodyProps = {
  book: Book | null;
};

export function BookMenuBody({ book }: BookMenuBodyProps) {
  const [borrowers, setBorrowers] = useState<User[]>([]);

  if (!book) {
    return;
  } // deal with this

  const { data, isLoading, error } = useGetBorrowers(book?.id);

  useEffect(() => {
    setBorrowers(data?.data);
  }, []);

  return (
    <Box padding={2}>
      <StyledMenuBox>
        {/* <Typography fontSize={20}>רשימת ספרים ({borrowers.length})</Typography> */}
        <Button variant="contained">הוסף ספר</Button>
      </StyledMenuBox>
      <BookBorrowersList
        borrowers={borrowers}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
}

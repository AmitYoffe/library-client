import { Book } from "@/app/(main)/common/dto/book";
import { User } from "@/app/api/users/dto/user";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { BookBorrowerRow } from "./BookBorrowerRow";

type BookBorrowersListProps = {
  borrowers: User[];
  isLoading: boolean;
  error: Error | null;
  book: Book;
};

export const BookBorrowersList = ({
  borrowers,
  isLoading,
  error,
  book,
}: BookBorrowersListProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching borrowers</Box>;

  return (
    <List>
      {borrowers && borrowers.length > 0 ? (
        borrowers.map((borrower: User) => (
          <Box key={borrower.id}>
            <ListItem>
              <BookBorrowerRow borrower={borrower} book={book} />
            </ListItem>
            <Divider />
          </Box>
        ))
      ) : (
        <Typography>
          There are no users currently borrowing this book
        </Typography>
      )}
    </List>
  );
};

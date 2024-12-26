import { User } from "@/app/api/users/dto/user";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { BookBorrowerRow } from "./BookBorrowerRow";

type BookBorrowersListProps = {
  borrowers: User[];
  isLoading: boolean;
  error: Error | null;
};

export const BookBorrowersList = ({
  borrowers,
  isLoading,
  error,
}: BookBorrowersListProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching borrowers</Box>;

  return (
    <List>
      {borrowers && borrowers.length > 0 ? (
        borrowers.map((borrower: User) => (
          <Box key={borrower.id}>
            <ListItem>
              <BookBorrowerRow user={borrower} />
            </ListItem>
            <Divider />
          </Box>
        ))
      ) : (
        <Typography>There are no books published by this author</Typography>
      )}
    </List>
  );
};

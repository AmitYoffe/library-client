import { getBorrowers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BookBorrowerRow } from "./BookBorrowerRow";

type BookBorrowersListProps = {
  bookId: number;
};

export function BookBorrowersList({ bookId }: BookBorrowersListProps) {
  const [borrowers, setBorrowers] = useState<User[]>([]);
  const { data, isLoading, error } = getBorrowers(bookId);

  useEffect(() => {
    setBorrowers(data?.data);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching borrowers</div>;

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
}

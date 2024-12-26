import { Book } from "@/app/(main)/common/dto/book";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { BooksByWriterRow } from "./BooksByWriterRow";

type WriterBookListListProps = {
  books: Book[];
  isLoading: boolean;
  error: Error | null;
};

export const WriterBookList = ({
  books,
  isLoading,
  error,
}: WriterBookListListProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching books</Box>;

  return (
    <List>
      {books && books.length > 0 ? (
        books.map((book: Book) => (
          <Box key={book.id}>
            <ListItem>
              <BooksByWriterRow book={book} />
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

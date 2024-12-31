import { Book } from "@/app/(main)/common/dto/book";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { BooksByWriterRow } from "./BooksByWriterRow";

type WriterBookListListProps = {
  books: Book[];
};

export const WriterBookList = ({ books }: WriterBookListListProps) => {
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

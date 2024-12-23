import { getBooksByWriter } from "@/app/api";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Book } from "../../books/dtos/book";
import { BooksByWriterRow } from "./BooksByWriterRow";

type WriterBookListListProps = {
  writerId: number;
};

export function WriterBookList({ writerId }: WriterBookListListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const { data, isLoading, error } = getBooksByWriter(writerId);

  useEffect(() => {
    setBooks(data?.data);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching books</div>;

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
}

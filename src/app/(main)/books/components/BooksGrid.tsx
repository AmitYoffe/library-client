import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { StyledGridContainer } from "../../components/styled";
import { Book } from "../dtos/book";
import { BookItem } from "./BookItem";
import { BookDrawer } from "./drawer/BookDrawer";

type BooksGridProps = {
  books: Book[];
  title: string;
};

export function BooksGrid({ books, title }: BooksGridProps) {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleOpenDrawer = (book: Book) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
    setSelectedBook(null);
  };

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container>
        {books.map((book, index) => (
          <BookItem
            book={book}
            toggleDrawer={() => handleOpenDrawer(book)}
            key={index}
          />
        ))}
      </StyledGridContainer>
      {selectedBook && (
        <BookDrawer
          book={selectedBook}
          open={open}
          toggleDrawer={handleCloseDrawer}
        />
      )}
    </Box>
  );
}

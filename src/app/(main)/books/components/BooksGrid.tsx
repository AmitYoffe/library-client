import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { ItemMenu } from "../../components/dialogs/itemMenu/ItemMenu";
import { StyledGridContainer } from "../../components/styled";
import { Book } from "../dtos/book";
import { BookItem } from "./BookItem";

type BooksGridProps = {
  books: Book[];
  title: string;
};

export function BooksGrid({ books, title }: BooksGridProps) {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const toggleDrawer = (newOpen: boolean, book?: Book) => {
    setOpen(newOpen);
    if (book) {
      setSelectedBook(book);
    }
  };

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container spacing={2}>
        {books.map((book, index) => (
          <Grid2 key={index}>
            <BookItem book={book} toggleDrawer={toggleDrawer} />
          </Grid2>
        ))}
      </StyledGridContainer>
      {selectedBook && (
        <ItemMenu
          dataItem={selectedBook}
          open={open}
          toggleDrawer={(newOpen) => toggleDrawer(newOpen)}
        />
      )}
    </Box>
  );
}

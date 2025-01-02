import { useState } from "react";
import {
  StyledGridContainer,
  StyledGridMain,
  StyledPageTitle,
} from "../../common/components/styled";
import { Book } from "../../common/dto/book";
import { BookItem } from "./BookItem";
import { BookDrawer } from "./drawer/BookDrawer";

type BooksGridProps = {
  books: Book[];
  title: string;
};

export const BooksGrid = ({ books, title }: BooksGridProps) => {
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
    <StyledGridMain>
      <StyledPageTitle>{title}</StyledPageTitle>
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
    </StyledGridMain>
  );
};

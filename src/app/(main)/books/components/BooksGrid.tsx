import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { StyledGridContainer } from "../../components/styled";
import { Book } from "../dtos/book";
import { BookItem } from "./BookItem";

type BooksGridProps = {
  books: Book[];
  title: string;
};

export function BooksGrid({ books, title }: BooksGridProps) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container spacing={2}>
        {books.map((book, index) => (
          <Grid2 key={index}>
            <BookItem book={book} toggleDrawer={toggleDrawer} open={open} />
          </Grid2>
        ))}
      </StyledGridContainer>
    </Box>
  );
}

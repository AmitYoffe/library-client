"use client";
import { useGetAllBooks } from "@/app/api/books/bookMethods";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AddItemFab } from "../common/components/dialogs/addItem/AddItemFab";
import { Book } from "../common/dto/book";
import { AddBookFormDialog } from "./components/addComponents/AddBookForm";
import { BooksGrid } from "./components/BooksGrid";

const BooksHomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data, isLoading, error } = useGetAllBooks();

  useEffect(() => {
    if (data) {
      setBooks(data.data);
    }
  }, [data]);

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching books</Box>;

  return (
    <>
      <BooksGrid books={books} title={"ספרים"} />;
      <AddItemFab
        handleOpen={handleOpen}
        addDialog={<AddBookFormDialog handleClose={handleClose} open={open} />}
      />
    </>
  );
};

export default BooksHomePage;

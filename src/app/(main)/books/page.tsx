"use client";
import { useGetAllBooks } from "@/app/api/books/bookMethods";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { BooksGrid } from "./components/BooksGrid";
import { Book } from "./dtos/book";

const BooksHomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { data, isLoading, error } = useGetAllBooks();

  useEffect(() => {
    if (data) {
      setBooks(data.data);
    }
  }, [data]);

  if (isLoading) return <Box>Loading...</Box>; // make use of Box not div, and apply it in a prettier way
  if (error) return <Box>Error fetching books</Box>;

  return <BooksGrid books={books} title={"ספרים"} />;
};

export default BooksHomePage;

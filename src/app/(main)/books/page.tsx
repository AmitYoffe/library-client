"use client";
import { useGetAllBooks } from "@/app/api/books/bookMethods";
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

  if (isLoading) return <div>Loading...</div>; // make use of Box not div, and apply it in a prettier way
  if (error) return <div>Error fetching books</div>;

  return <BooksGrid books={books} title={"ספרים"} />;
};

export default BooksHomePage;

"use client";
import { getAll } from "@/app/api/books/bookMethods";
import { useEffect, useState } from "react";
import { GridContainer } from "../components/GridContainer";
import { Book } from "./dtos/book";

const BooksHomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { data, isLoading, error } = getAll();

  useEffect(() => {
    if (data) {
      setBooks(data.data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching writers</div>;

  return <GridContainer data={books} title={"ספרים"} />;
};

export default BooksHomePage;

import { Book, BookDto } from "@/app/(main)/common/dto/book";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const useGetAllBooks = () =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_API}/books`),
  });

export const useGetBooksByWriter = (writerId: number) =>
  useQuery({
    queryKey: ["writersOfBook"],
    queryFn: () => httpClient.get(`${Server_API}/books/writer/${writerId}`),
  });

export const useGetBorrowers = (bookId: number) =>
  useQuery({
    queryKey: ["borrowers"],
    queryFn: () => httpClient.get(`${Server_API}/books/borrow/${bookId}`),
  });

export const useAddBook = () => {
  return useMutation({
    mutationFn: (book: BookDto) => httpClient.post(`${Server_API}/books`, book),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useDeleteBook = (bookId: number) => {
  return useMutation({
    mutationFn: () => httpClient.delete(`${Server_API}/books/${bookId}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useEditBook = () => {
  return useMutation({
    mutationFn: (book: Book) =>
      httpClient.patch(`${Server_API}/books/${book.id}`, book),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

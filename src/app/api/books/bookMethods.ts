import { Book } from "@/app/(main)/books/dtos/book";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const useGetAllBooks = () =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_API}/books`),
  });

export const useGetBorrowers = (bookId: number) =>
  useQuery({
    queryKey: ["borrowers"],
    queryFn: () => httpClient.get(`${Server_API}/books/borrow/${bookId}`),
  });

export const useAddBook = () => {
  return useMutation({
    mutationFn: (book: Book) => httpClient.post(`${Server_API}/books`, book),

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

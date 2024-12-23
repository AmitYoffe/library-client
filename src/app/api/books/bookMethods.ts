import { Book } from "@/app/(main)/books/dtos/book";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const getAllBooks = () =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_API}/books`),
  });

export const getBorrowers = (bookId: number) =>
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

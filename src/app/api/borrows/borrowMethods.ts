import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const useGetBorrowers = (bookId: number) =>
  useQuery({
    queryKey: ["borrowers"],
    queryFn: () => httpClient.get(`${Server_API}/books/borrow/${bookId}`),
  });

export const useBorrowBook = () => {
  return useMutation({
    mutationFn: ({ bookId, userId }: { bookId: number; userId: number }) =>
      httpClient.post(`${Server_API}/books/${bookId}/borrow/${userId}`),
  });
};

export const useReturnBook = () => {
  return useMutation({
    mutationFn: ({ bookId, userId }: { bookId: number; userId: number }) =>
      httpClient.post(`${Server_API}/books/${bookId}/return/${userId}`),
  });
};

export const useGetUserBorrowedBooks = (userId: number) =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_API}/books/user/${userId}`),
  });

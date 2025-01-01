import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_Book_API = `${process.env.NEXT_PUBLIC_API_URL}/books`;

export const useGetBorrowers = (bookId: number) =>
  useQuery({
    queryKey: ["borrowers"],
    queryFn: () => httpClient.get(`${Server_Book_API}/borrow/${bookId}`),
  });

export const useBorrowBook = () => {
  return useMutation({
    mutationFn: ({ bookId, userId }: { bookId: number; userId: number }) =>
      httpClient.post(`${Server_Book_API}/${bookId}/borrow/${userId}`),
  });
};

export const useReturnBook = () => {
  return useMutation({
    mutationFn: ({ bookId, userId }: { bookId: number; userId: number }) =>
      httpClient.post(`${Server_Book_API}/${bookId}/return/${userId}`),
  });
};

export const useGetUserBorrowedBooks = (userId: number) =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_Book_API}/user/${userId}`),
  });

export const useGetBorrowsCount = (bookId: number) =>
  useQuery({
    queryKey: ["borrowedBooksCount"],
    queryFn: () => httpClient.get(`${Server_Book_API}/borrow/${bookId}/count`),
  });

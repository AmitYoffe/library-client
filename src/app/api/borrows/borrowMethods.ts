import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";

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

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["borrowers"],
      });
    },
  });
};

export const useReturnBook = () => {
  return useMutation({
    mutationFn: ({ bookId, userId }: { bookId: number; userId: number }) =>
      httpClient.post(`${Server_Book_API}/${bookId}/return/${userId}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["borrowers"],
      });
    },
  });
};

export const useGetUserBorrowedBooks = (userId: number) =>
  useQuery({
    queryKey: ["borrowedBooks"],
    queryFn: () => httpClient.get(`${Server_Book_API}/user/${userId}`),
  });

export const useGetBorrowsCount = (bookId: number) =>
  useQuery({
    queryKey: ["borrowedBooksCount"],
    queryFn: () => httpClient.get(`${Server_Book_API}/borrow/${bookId}/count`),
  });

// For some reason, when i add things, the UI refreshes consistantly
// When i edit sometimes it changes the UI immediately
// And when i delete it doesn't update UI

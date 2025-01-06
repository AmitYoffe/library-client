import { Book, BookDto } from "@/app/(main)/common/dto/book";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_Book_API = `${process.env.NEXT_PUBLIC_API_URL}/books`;

export const useGetAllBooks = () =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(Server_Book_API),
    // enabled: true,
    // refetchOnWindowFocus: true,
    // refetchOnMount: "always",
    // staleTime: 0,
  });

export const useGetBooksByWriter = (writerId: number) =>
  useQuery({
    queryKey: ["writersOfBook", writerId],
    queryFn: () => httpClient.get(`${Server_Book_API}/writer/${writerId}`),
  });

export const useAddBook = () => {
  return useMutation({
    mutationFn: (book: BookDto) => httpClient.post(Server_Book_API, book),
    mutationKey: ["books"],

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });
};

export const useDeleteBook = (bookId: number) => {
  return useMutation({
    mutationFn: () => httpClient.delete(`${Server_Book_API}/${bookId}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books", "writersOfBook", "activeReaders"],
      });
    },
  });
};

export const useEditBook = () => {
  return useMutation({
    mutationFn: (book: Book) =>
      httpClient.patch(`${Server_Book_API}/${book.id}`, book),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books", "writersOfBook", "activeReaders"],
      });
      // queryClient.invalidateQueries(["books"]);
      // queryClient.invalidateQueries(["writersOfBook", book.writerId]);
      // queryClient.invalidateQueries(["activeReaders", book.writerId]);
    },
  });
};

export const useGetActiveReaders = (writerId: number) =>
  useQuery({
    queryKey: ["activeReaders", writerId],
    queryFn: () => httpClient.get(`${Server_Book_API}/reader/${writerId}`),
  });

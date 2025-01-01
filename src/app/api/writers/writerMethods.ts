import { Writer, WriterDto } from "@/app/(main)/common/dto/writer";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_Writer_API = `${process.env.NEXT_PUBLIC_API_URL}/writers`;

// export const useWriters = (
//   method: "GET" | "POST" | "PATCH" | "DELETE",
//   id?: number
// ) => {
//   const writersRoute = id
//     ? `${Server_API}/writers/${id}`
//     : `${Server_API}/writers`;

//   return useMutation({
//     mutationFn: (id?: number) => {
//       switch (method) {
//         case "GET":
//           return httpClient.get(writersRoute);
//         case "POST":
//           return httpClient.post(writersRoute, id);
//         case "PATCH":
//           return httpClient.put(writersRoute, id);
//         case "DELETE":
//           return httpClient.delete(writersRoute);
//         default:
//           throw new Error(`Unsupported method: ${method}`);
//       }
//     },
//   });
// };

// export const getAll = () => useWriters("GET");
// export const getOne = (id: number) => useWriters("GET", id);
// export const create = () => useWriters("POST");
// export const update = (id: number) => useWriters("PATCH", id);
// export const removeOne = (id: number) => useWriters("DELETE", id);

export const useGetAllWriters = () =>
  useQuery({
    queryKey: ["writers"],
    queryFn: () => httpClient.get(Server_Writer_API),
  });

export const useGetWriterById = (writerId: number) =>
  useQuery({
    queryKey: ["writerById", writerId],
    queryFn: () => httpClient.get(`${Server_Writer_API}/${writerId}`),
  });

export const useGetWriterByBook = (bookId: number) =>
  useQuery({
    queryKey: ["writerByBookId", bookId],
    queryFn: () => httpClient.get(`${Server_Writer_API}/book/${bookId}`),
  });

export const useAddWriter = () => {
  return useMutation({
    mutationFn: (writer: WriterDto) =>
      httpClient.post(Server_Writer_API, writer),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["writers"] });
    },
  });
};

export const useDeleteWriter = (writerId: number) => {
  return useMutation({
    mutationFn: () => httpClient.delete(`${Server_Writer_API}/${writerId}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["writers"] });
    },
  });
};

export const useEditWriter = () => {
  return useMutation({
    mutationFn: (writer: Writer) =>
      httpClient.patch(`${Server_Writer_API}/${writer.id}`, writer),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["writers"] });
    },
  });
};

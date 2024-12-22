import { useMutation, useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";
import { Writer } from "@/app/(main)/writers/dtos/writer";
import { queryClient } from "@/components/layout/CustomQueryClientProvider";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

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
export const getAllWriters = () =>
  useQuery({
    queryKey: ["writers"],
    queryFn: () => httpClient.get(`${Server_API}/writers`),
  });

// export const getOne = (id: number) => useWriters("GET", id);
// export const create = () => useWriters("POST");
// export const update = (id: number) => useWriters("PATCH", id);
// export const removeOne = (id: number) => useWriters("DELETE", id);

export const useAddWriter = () => {
  return useMutation({
    mutationFn: (writer: Writer) =>
      httpClient.post(`${Server_API}/writers`, writer),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["writers"] });
    },
  });
};

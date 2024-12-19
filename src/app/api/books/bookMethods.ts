import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const getAll = () =>
  useQuery({
    queryKey: ["books"],
    queryFn: () => httpClient.get(`${Server_API}/books`),
  });

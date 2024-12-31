import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FormFields } from "../../login/types/FormFields";
import { httpClient } from "../httpClient";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const useLogUser = () => {
  const loginRoute = `${Server_API}/user/login`;

  return useMutation({
    mutationFn: (formData: FormFields) => axios.post(loginRoute, formData),
  });
};

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ["users"], // check if i need to change these per hook
    queryFn: () => httpClient.get(`${Server_API}/user`),
  });

export const useGetUserInfoFromJwt = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => httpClient.get(`${Server_API}/user/jwt`),
  });

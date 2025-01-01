import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FormFields } from "../../login/types/FormFields";
import { httpClient } from "../httpClient";

const Server_User_API = `${process.env.NEXT_PUBLIC_API_URL}/user`;

export const useLogUser = () => {
  const loginRoute = `${Server_User_API}/user/login`;

  return useMutation({
    mutationFn: (formData: FormFields) => axios.post(loginRoute, formData),
  });
};

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => httpClient.get(`${Server_User_API}/user`),
  });

export const useGetUserInfoFromJwt = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => httpClient.get(`${Server_User_API}/user/jwt`),
  });

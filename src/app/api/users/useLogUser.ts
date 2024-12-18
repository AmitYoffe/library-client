import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormFields } from "../../login/types/FormFields";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const useLogUser = () => {
  const loginRoute = `${Server_API}/user/login`;

  return useMutation({
    mutationFn: (formData: FormFields) => axios.post(loginRoute, formData),
  });
};

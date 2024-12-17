import axios from "axios";
const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const httpClient = axios.create({
  baseURL: Server_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("token: ", token);
  } else {
    delete httpClient.defaults.headers.common["Authorization"]; // do  i really need this line ?
  }
};

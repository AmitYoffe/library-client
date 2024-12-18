import axios from "axios";
import Cookies from "js-cookie";

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
    console.log("Token set: ", token);

    Cookies.set("jwtToken", token, {
      expires: 7,
    });
  } else {
    const cookieToken = Cookies.get("jwtToken");
    httpClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieToken}`;
    console.log("Token set again: ", cookieToken);
  }
};

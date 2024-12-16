import { useQuery } from "@tanstack/react-query";
import { FormFields } from "../login/types/FormFields";

const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const logUser = async (formData: FormFields) => {
//   try {
//     const response = await fetch(`${Server_API}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error in signing of user:", error);
//   }
};

// Todo:
// 1) make use of react query
// 2) catch received jwt and add it to the requests

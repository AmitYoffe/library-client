"use client";
import { setAuthToken } from "@/app/api/httpClient";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect } from "react";

type AuthContextType = {
  storedToken: string | undefined;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const storedToken = Cookies.get("jwtToken");

  const logout = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (storedToken) {
      setAuthToken(storedToken);
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ storedToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

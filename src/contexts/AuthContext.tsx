"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/app/api/httpClient";

interface AuthContextType {
  token: string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = Cookies.get("jwtToken");
    if (storedToken) {
      setToken(storedToken);
      setAuthToken(token);
    } else {
      logout();
    }
  }, []);

  const logout = () => {
    setAuthToken(null);
    setToken(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

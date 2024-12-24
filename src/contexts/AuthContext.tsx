"use client";
import { setAuthToken } from "@/app/api/httpClient";
import Cookies from "js-cookie";
import { decode, JwtPayload } from "jsonwebtoken";
import { usePathname, useRouter } from "next/navigation";
import { createContext, ReactNode, useLayoutEffect, useState } from "react";

type AuthContextType = {
  storedToken: string | undefined;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [storedToken, setStoredToken] = useState<string | undefined>(
    Cookies.get("jwtToken")
  );

  const pathname = usePathname();

  const logout = () => {
    setStoredToken(undefined);
    Cookies.remove("jwtToken");
    router.push("/login");
  };

  useLayoutEffect(() => {
    if (storedToken) {
      const user = decode(storedToken) as JwtPayload;
      setAuthToken(storedToken);

      if (!user?.isAdmin && pathname !== "/login") {
        router.push("/");
      }
    } else {
      logout();
    }
  }, [storedToken]);

  return (
    <AuthContext.Provider value={{ storedToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

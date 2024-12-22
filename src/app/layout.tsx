import { AuthProvider } from "@/contexts/AuthContext";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ספריית הסרטים האולטימטיבית",
  description: "ראה סרטים מכל הסוגים ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <html dir="rtl">
          <body style={{ margin: 0 }}>{children}</body>
        </html>
      </ThemeProvider>
    </AuthProvider>
  );
}

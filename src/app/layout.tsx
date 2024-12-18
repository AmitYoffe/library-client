import { AuthProvider } from "@/contexts/AuthContext";
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
      <html dir="rtl">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}

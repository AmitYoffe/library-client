import { Header } from "@/components/layout";
import { CustomQueryClientProvider } from "@/components/layout/CustomQueryClientProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
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
    <html dir="rtl">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CustomQueryClientProvider>
            <AuthProvider>
              <body style={{ margin: 0 }}>
                <Header />
                {children}
              </body>
            </AuthProvider>
          </CustomQueryClientProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

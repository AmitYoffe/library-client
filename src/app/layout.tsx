import { Header, SideBar } from "@/components/layout";
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
    <html lang="en" dir="rtl">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <CustomQueryClientProvider>
                <Header />
                <SideBar />
                {children}
              </CustomQueryClientProvider>
            </ThemeProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

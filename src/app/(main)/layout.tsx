import { Header, SideBar } from "@/components/layout";
import { CustomQueryClientProvider } from "@/components/layout/CustomQueryClientProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { AddItemFab } from "./components/dialogs/addItem/AddItemFab";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CustomQueryClientProvider>
            <Header />
            <SideBar />
            <AddItemFab />
            {children}
          </CustomQueryClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </AppRouterCacheProvider>
  );
}

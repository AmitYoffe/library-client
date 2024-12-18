import { Header } from "@/components/layout";
import { CustomQueryClientProvider } from "@/components/layout/CustomQueryClientProvider";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

export default function LoginPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CustomQueryClientProvider>
        <Header />
        {children}
      </CustomQueryClientProvider>
    </ThemeProvider>
  );
}

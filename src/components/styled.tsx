import { Box, styled } from "@mui/material";

export const StyledRoutePageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  justifyContent: "center",
  height: "100vh",
  padding: 70,
}));

export const StyledTitle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
}));

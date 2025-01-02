import { Box, styled } from "@mui/material";

export const StyledRootPageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  justifyContent: "space-between",
  height: "100vh",
  padding: 120,
}));

export const StyledTitle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
}));

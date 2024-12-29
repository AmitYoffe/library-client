import { Box, styled } from "@mui/material";

export const StyledSideBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  alignItems: "center",
  height: "100%",
  padding: 10,
  paddingTop: 80,
  gap: 14,
  backgroundColor: theme.palette.primary.dark,
}));

import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  gap: 18,
  backgroundColor: theme.palette.primary.main,
}));

import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: 10,
  gap: 18,
  backgroundColor: theme.palette.primary.main,
}));

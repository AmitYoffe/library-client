import { Box, styled } from "@mui/material";

export const StyledWriterItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  alignItems: "center",
  justifyContent: "space-between",
  padding: 15,
  margin: 18,
  height: 60,
  width: 285,
  borderRadius: "8px",
}));

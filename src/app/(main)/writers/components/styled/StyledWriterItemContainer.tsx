import { Box, styled } from "@mui/material";

export const StyledWriterItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  alignItems: "center",
  gap: 55,
  padding: 16,
  height: 68,
  borderRadius: "8px",
}));

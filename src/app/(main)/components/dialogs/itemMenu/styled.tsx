import { Box, MenuItem, styled } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 12,
  gap: 10,
}));

export const StyledMenuBox = styled(Box)(() => ({
  display: "flex",
  gap: 18,
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
  gap: 8,
  justifyContent: "space-between",
}));

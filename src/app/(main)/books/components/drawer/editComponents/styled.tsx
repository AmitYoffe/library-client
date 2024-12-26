import { Box, styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  // dir: "rtl",
}));

export const StyledSelect = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledFieldsContainer = styled(Box)(() => ({
  display: "flex",
  gap: 20,
}));

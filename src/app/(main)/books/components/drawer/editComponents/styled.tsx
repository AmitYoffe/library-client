import { Box, styled, TextField } from "@mui/material";

export const StyledSelect = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledFieldsContainer = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  width: "100%",
}));

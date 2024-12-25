import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  // dir: "rtl",
}));

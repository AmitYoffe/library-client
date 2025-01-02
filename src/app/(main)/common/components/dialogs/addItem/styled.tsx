import { DialogActions, DialogContent, styled, TextField } from "@mui/material";

export const StyledFormDialog = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  // dir: "rtl",
}));

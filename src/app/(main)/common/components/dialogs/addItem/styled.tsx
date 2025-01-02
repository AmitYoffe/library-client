import { DialogActions, DialogContent, styled } from "@mui/material";

export const StyledFormDialog = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

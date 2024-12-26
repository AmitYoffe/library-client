import {
  Button,
  DialogActions,
  DialogContent,
  styled,
  TextField,
} from "@mui/material";

export const StyledFormDialog = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export const StyledCancelBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

export const StyledSubmitBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: "100px",
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  // dir: "rtl",
}));

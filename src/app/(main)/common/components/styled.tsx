import { Box, Button, Fab, MenuItem, styled, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const StyledGridContainer = styled(Grid)(() => ({
  justifyContent: "flex-start",
  alignContent: "flex-start",
  padding: 8,
  overflowY: "auto",
  height: "80vh",
  maxWidth: "85%",
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  position: "absolute",
  left: 25,
  bottom: 25,
  color: "white",
}));

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

export const StyledSubmitBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: "110px",
  fontSize: 16,
  fontWeight: 500,
}));

export const StyledCancelBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  width: "110px",
  fontSize: 16,
  fontWeight: 500,
}));

export const StyledGridMain = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingRight: "160px",
  paddingLeft: "120px",
  paddingTop: "80px",
}));

export const StyledPageTitle = styled(Typography)(() => ({
  display: "flex",
  fontSize: 50,
  width: "100%",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  dir: "rtl",
}));

import { Box, Button, Fab, MenuItem, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

// make sure no more than 3 columns can be applied
export const StyledGridContainer = styled(Grid)(() => ({
  justifyContent: "flex-start",
  alignContent: "flex-start",
  padding: 8,
  overflowY: "auto",
  height: "80vh",
  maxWidth: "1400px",
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
  width: "100px",
}));

export const StyledCancelBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

import { Fab, styled } from "@mui/material";
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

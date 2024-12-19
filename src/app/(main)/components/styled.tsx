import { Fab, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const StyledGridContainer = styled(Grid)(() => ({
  justifyContent: "space-around",
  alignContent: "flex-start",
  overflowY: "scroll",
  height: "80vh",
  maxWidth: "1400px",
  margin: "0 auto",
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  position: "absolute",
  left: 25,
  bottom: 25,
  color: "white",
}));

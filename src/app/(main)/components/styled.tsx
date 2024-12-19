import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  alignContent: "flex-start",
  overflowY: "scroll",
  height: "80vh",
  maxWidth: "1400px",
  margin: "0 auto",
}));

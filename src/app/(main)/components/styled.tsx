import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

// todo: make this container accept only 3 columns at most

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  paddingX: "130px",
  paddingTop: "80px",
  gap: 3,
  justifyContent: "center",
  flexGrow: 1,
}));

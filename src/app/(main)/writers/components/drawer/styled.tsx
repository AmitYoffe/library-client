import { Box, styled } from "@mui/material";

export const StyledDefaultPicBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "130px",
  height: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

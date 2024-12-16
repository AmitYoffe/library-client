import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
}));

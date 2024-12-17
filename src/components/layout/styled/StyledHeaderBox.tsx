import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  gap: 18,
  backgroundColor: theme.palette.primary.main,
  boxShadow: "1px 1px 3px gray",
  zIndex: 1,
}));
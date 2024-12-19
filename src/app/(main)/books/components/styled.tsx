import { Box, styled } from "@mui/material";

export const StyledBookItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  alignItems: "center",
  justifyContent: "space-between",
  margin: 18,
  width: 325,
  height: "128px",
  borderRadius: "8px",
}));

export const StyledBookInfoBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginRight: 2,
  justifyContent: "start",
  width: "100%",
  paddingRight: 8,
}));

export const StyledInfoIconBox = styled(Box)(() => ({
  position: "relative",
  left: 10,
  bottom: -42,
}));

export const StyledDefaultPicBox = styled(Box)(() => ({
  backgroundColor: "lightgray",
  maxWidth: "110px",
  width: "200px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
}));

import { Box, Card, CardActionArea, Dialog, styled } from "@mui/material";

export const StyledBookCardActionArea = styled(CardActionArea)(({ theme }) => ({
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

export const StyledDefaultPicBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  maxWidth: "110px",
  width: "200px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
}));

export const StyledBookBorrowerRowBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const StyledDeleteDialogCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 40,
  width: "430px",
  padding: 26,
}));

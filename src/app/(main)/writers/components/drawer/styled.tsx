import { Box, Card, styled } from "@mui/material";

export const StyledDefaultPicBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "130px",
  height: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledEditDialogCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 40,
  width: "430px",
  padding: 26,
}));
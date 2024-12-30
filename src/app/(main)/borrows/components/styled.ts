import { Card, IconButton, styled, Typography } from "@mui/material";

export const StyledBorrowDialogCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: 40,
  width: "430px",
  padding: 26,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));

export const StyledDeleteIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

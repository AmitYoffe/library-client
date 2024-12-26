"use client";
import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "fixed",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  paddingRight: 12,
  gap: 25,
  backgroundColor: theme.palette.primary.dark,
  boxShadow: "1px 1px 3px gray",
  zIndex: 1,
  color: "white",
}));

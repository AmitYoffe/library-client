import { Box, Stack, styled } from "@mui/material";
import MuiCard from "@mui/material/Card";
import { ElementType } from "react";

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export const StyledLogInContainer = styled(Stack)(() => ({
  height: "100vh",
  backgroundImage:
    "radial-gradient(at 50% 50%, hsla(310, 23.80%, 71.20%, 0.50), white)",
}));

export const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "8px",
  padding: 6,
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark} , white)`,
}));

export const LoginBoxContainer = styled(Box)<{ component?: ElementType }>(
  () => ({
    display: "flex",
    flexDirection: "column",
    gap: 12,
  })
);

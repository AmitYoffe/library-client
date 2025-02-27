"use client";
import { createTheme } from "@mui/material";
import { Secular_One } from "next/font/google";
import { color } from "./palette";

const secularOne = Secular_One({
  weight: "400",
  subsets: ["latin"],
});

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: color.pink[500],
      light: color.pink[300],
      dark: color.pink[600],
    },
    secondary: {
      main: color.gray[100],
      dark: color.gray[200],
      light: color.white,
    },
  },
  typography: {
    fontFamily: secularOne.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: color.pink[700],
          color: "white",
        },
      },
    },
  },
});

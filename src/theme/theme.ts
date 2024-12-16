"use client";
import { createTheme } from "@mui/material";
import { color } from "./palette";

export const theme = createTheme({
  palette: {
    primary: {
      main: color.pink[500],
      light: color.pink[300],
      dark: color.pink[800],
    },
    secondary: {
      main: color.gray[100],
      dark: color.gray[200],
    },
    // white
  },
});

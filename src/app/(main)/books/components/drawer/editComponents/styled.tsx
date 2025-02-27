import { Box, styled, TextField } from "@mui/material";

export const StyledSelect = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
    fontSize: "small",
  },
  "& > p": {
    backgroundColor: theme.palette.primary.light,
    textAlign: "right",
    margin: 0,
  },
}));

export const StyledFieldsContainer = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  width: "100%",
}));

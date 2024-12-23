import { Box, CardActionArea, styled } from "@mui/material";

export const StyledWriterCardActionArea = styled(CardActionArea)(
  ({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    margin: 18,
    height: 85,
    width: 310,
    borderRadius: "8px",
  })
);

export const StyledBooksByWriterRowBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

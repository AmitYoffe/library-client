import { StyledIdTypography } from "@/app/(main)/books/components/styled";
import { Book } from "@/app/(main)/common/dto/book";
import { theme } from "@/theme/theme";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Typography } from "@mui/material";
import { StyledBooksByWriterRowBox } from "../styled";

type BooksByWriterRowProps = {
  book: Book;
};

export const BooksByWriterRow = ({ book }: BooksByWriterRowProps) => {
  return (
    <>
      <StyledBooksByWriterRowBox>
        <Typography>{book.title}</Typography>
        <StyledIdTypography>{book.id}</StyledIdTypography>
      </StyledBooksByWriterRowBox>
      <IconButton
        sx={{ color: `${theme.palette.primary.dark}` }}
        onClick={() =>
          console.log("This button will prompt a delete dialog for this book")
        }
      >
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
};

import { User } from "@/app/api/users/dto/user";
import { theme } from "@/theme/theme";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Typography } from "@mui/material";
import { StyledBookBorrowerRowBox, StyledIdTypography } from "../styled";

type BookBorrowerRowProps = {
  user: User;
};

export const BookBorrowerRow = ({ user }: BookBorrowerRowProps) => {
  return (
    <>
      <StyledBookBorrowerRowBox>
        <Typography>{user.username}</Typography>
        <StyledIdTypography>{user.id}</StyledIdTypography>
      </StyledBookBorrowerRowBox>
      <IconButton
        sx={{ color: `${theme.palette.primary.dark}` }}
        onClick={() =>
          console.log("This button will prompt a delete dialog for this borrow")
        }
      >
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
};

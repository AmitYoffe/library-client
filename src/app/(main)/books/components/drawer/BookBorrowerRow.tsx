import { User } from "@/app/api/users/dto/user";
import { theme } from "@/theme/theme";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import { StyledBookBorrowerRowBox } from "../styled";

type BookBorrowerRowProps = {
  user: User;
};

export function BookBorrowerRow({ user }: BookBorrowerRowProps) {
  return (
    <StyledBookBorrowerRowBox>
      {user.username}
      <IconButton
        sx={{ color: `${theme.palette.primary.dark}` }}
        onClick={() =>
          console.log("This button will prompt a delete dialog for this borrow")
        }
      >
        <DeleteOutlineIcon />
      </IconButton>
    </StyledBookBorrowerRowBox>
  );
}

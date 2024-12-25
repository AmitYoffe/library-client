import { DeleteBookDialog } from "@/app/(main)/books/components/drawer/DeleteBookDialog";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, IconButton, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { StyledMenuItem } from "../../../writers/components/drawer/styled";
import { Book } from "../../dtos/book";

type MoreActionsProps = {
  book: Book;
};

export function MoreBookActions({ book }: MoreActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton sx={{ height: "40px" }} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <StyledMenuItem onClick={handleClose}>
          <ModeEditIcon />
          Edit
        </StyledMenuItem>
        <Divider />
        <DeleteBookDialog book={book} />
      </Menu>
    </>
  );
}

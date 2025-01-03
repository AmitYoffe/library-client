import { DeleteBookDialog } from "@/app/(main)/books/components/drawer/deleteComponents/DeleteBookDialog";
import { StyledMoreIconButton } from "@/app/(main)/writers/components/drawer/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Book } from "../../../common/dto/book";
import { EditBookDialog } from "./editComponents/EditBookDialog";

type MoreActionsProps = {
  book: Book;
};

export const MoreBookActions = ({ book }: MoreActionsProps) => {
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
      <StyledMoreIconButton onClick={handleClick}>
        <MoreVertIcon />
      </StyledMoreIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <EditBookDialog book={book} />
        <Divider />
        <DeleteBookDialog book={book} />
      </Menu>
    </>
  );
};

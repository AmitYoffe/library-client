import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, IconButton, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Writer } from "../../dtos/writer";
import { DeleteWriterDialog } from "./deleteComponents/DeleteWriterDialog";
import { EditWriterDialog } from "./editComponents/EditWriterDialog";

type MoreActionsProps = {
  writer: Writer;
};

export const MoreWriterActions = ({ writer }: MoreActionsProps) => {
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
        <EditWriterDialog writer={writer} />
        <Divider />
        <DeleteWriterDialog writer={writer} />
      </Menu>
    </>
  );
};

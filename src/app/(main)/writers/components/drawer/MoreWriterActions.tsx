import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Writer } from "../../../common/dto/writer";
import { DeleteWriterDialog } from "./deleteComponents/DeleteWriterDialog";
import { EditWriterDialog } from "./editComponents/EditWriterDialog";
import { StyledMoreIconButton } from "./styled";

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
      <StyledMoreIconButton onClick={handleClick}>
        <MoreVertIcon />
      </StyledMoreIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <EditWriterDialog writer={writer} />
        <Divider />
        <DeleteWriterDialog writer={writer} />
      </Menu>
    </>
  );
};

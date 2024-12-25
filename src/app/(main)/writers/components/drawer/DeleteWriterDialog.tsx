import { StyledDeleteDialogCard } from "@/app/(main)/books/components/styled";
import { useDeleteWriter } from "@/app/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { StyledMenuItem } from "../../../components/dialogs/itemMenu/styled";
import { Writer } from "../../dtos/writer";

type DeleteWriterProps = {
  writer: Writer;
};

export function DeleteWriterDialog({ writer }: DeleteWriterProps) {
  const [open, setOpen] = useState(false);

  const handleClickCancel = () => {
    setOpen(false);
  };

  const deleteMutation = useDeleteWriter(writer.id);

  const handleClickAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <StyledMenuItem onClick={() => setOpen(true)}>
        <DeleteOutlineIcon />
        Delete
      </StyledMenuItem>
      <Dialog open={open}>
        <StyledDeleteDialogCard>
          <Typography fontSize={24}>
            האם אתה בטוח שברצונך למחוק את
            <br />
            {writer.firstName} ?
          </Typography>
          <Box display={"flex"} gap={8}>
            <Button onClick={handleClickCancel} variant="contained">
              ביטול
            </Button>
            <Button onClick={handleClickAccept} variant="contained">
              אישור
            </Button>
          </Box>
        </StyledDeleteDialogCard>
      </Dialog>
    </>
  );
}

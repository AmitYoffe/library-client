import { StyledSubmitBtn } from "@/app/(main)/common/components/dialogs/addItem/styled";
import { StyledMenuItem } from "@/app/(main)/common/components/styled";
import { useEditWriter } from "@/app/api";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import { Writer } from "../../../../common/dto/writer";
import { EditWriterFields } from "./EditWriterFields";

type EditWriterDialogProps = {
  writer: Writer;
};

export const EditWriterDialog = ({ writer }: EditWriterDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editMutation = useEditWriter(); // add this func in the methods

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const writerFormJson = Object.fromEntries(formData.entries());

    const updatedWriter: Writer = {
      id: writer.id,
      firstName: writerFormJson.firstName as string,
      lastName: writerFormJson.lastName as string,
    };

    editMutation.mutate(updatedWriter, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <>
      <StyledMenuItem onClick={handleOpen}>
        <ModeEditIcon />
        Edit
      </StyledMenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(event);
          },
        }}
      >
        <>
          {/* add costum styled StyledEditDialogCard */}
          <EditWriterFields writer={writer} />
          <Box display="flex" gap={2}>
            <Button onClick={handleClose} variant="outlined">
              ביטול
            </Button>
            <StyledSubmitBtn variant="contained" color="primary" type="submit">
              אישור
            </StyledSubmitBtn>
          </Box>
        </>
      </Dialog>
    </>
  );
};

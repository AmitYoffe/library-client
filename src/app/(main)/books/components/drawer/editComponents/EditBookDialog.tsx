import { StyledSubmitBtn } from "@/app/(main)/components/dialogs/addItem/styled";
import { StyledMenuItem } from "@/app/(main)/components/dialogs/itemMenu/styled";
import { useEditBook } from "@/app/api";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { Book } from "../../../dtos/book";
import { StyledDeleteDialogCard } from "../../styled";
import { EditBookFields } from "./EditBookFields";

type EditBookDialogProps = {
  book: Book;
};

export const EditBookDialog = ({ book }: EditBookDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editMutation = useEditBook();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookFormJson = Object.fromEntries(formData.entries());

    const updatedBook: Book = {
      id: book.id,
      title: bookFormJson.title as string,
      count: parseInt(bookFormJson.count as string, 10),
      writerId: bookFormJson.writerId as string,
    };

    editMutation.mutate(updatedBook, {
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
        <StyledDeleteDialogCard>
          <Typography fontSize={24}>ערוך ספר - {book.title}</Typography>
          <EditBookFields book={book} />
          <Box display="flex" gap={2}>
            <Button onClick={handleClose} variant="outlined">
              ביטול
            </Button>
            <StyledSubmitBtn variant="contained" color="primary" type="submit">
              אישור
            </StyledSubmitBtn>
          </Box>
        </StyledDeleteDialogCard>
      </Dialog>
    </>
  );
};

import { StyledSubmitBtn } from "@/app/(main)/common/components/dialogs/addItem/styled";
import { StyledMenuItem } from "@/app/(main)/common/components/styled";
import { useEditBook } from "@/app/api";
import { zodResolver } from "@hookform/resolvers/zod";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Book } from "../../../../common/dto/book";
import { StyledDeleteDialogCard } from "../../styled";
import { EditBookFields } from "./EditBookFields";
import { BookFormFields, bookSchema } from "../../schema";

type EditBookDialogProps = {
  book: Book;
};

export const EditBookDialog = ({ book }: EditBookDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormFields>({
    resolver: zodResolver(bookSchema),
  });

  const { mutate: editMutation } = useEditBook();

  const onSubmit = (data: BookFormFields) => {
    const updatedBook = { ...book, ...data };

    console.log(
      "i hope it isnt missing the title field updatedBook :",
      updatedBook
    );

    editMutation(updatedBook, {
      onSuccess: () => handleClose(),
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
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <StyledDeleteDialogCard>
          <Typography fontSize={24}>ערוך ספר - {book.title}</Typography>
          <EditBookFields book={book} register={register} errors={errors} />
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

import { useBorrowBook } from "@/app/api";
import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledDeleteDialogCard } from "../../books/components/styled";
import { StyledSubmitBtn } from "../../common/components/dialogs/addItem/styled";
import { UserDropDown } from "./UserDropDown";

export const BorrowBookDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, register } = useForm<{ bookId: number }>();

  const addBorrowMutation = useBorrowBook();

  const onSubmit = (data: { bookId: number }) => {
    addBorrowMutation.mutate(data.bookId, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        השאל
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <StyledDeleteDialogCard>
          <UserDropDown register={register} />
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

import { useBorrowBook } from "@/app/api";
import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledDeleteDialogCard } from "../../books/components/styled";
import { FormButtons } from "../../common/components/FormButtons";
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
          <FormButtons handleClose={handleClose} />
        </StyledDeleteDialogCard>
      </Dialog>
    </>
  );
};

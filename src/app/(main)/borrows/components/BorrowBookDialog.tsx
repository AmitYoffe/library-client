import { useBorrowBook } from "@/app/api";
import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledDeleteDialogCard } from "../../books/components/styled";
import { FormButtons } from "../../common/components/FormButtons";
import { UserDropDown } from "./UserDropDown";

type BorrowBookDialogProps = {
  bookId: number;
};

export const BorrowBookDialog = ({ bookId }: BorrowBookDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, register } = useForm<{ userId: number }>();

  const { mutate } = useBorrowBook();

  const onSubmit = (data: { userId: number }) => {
    mutate(
      { userId: data.userId, bookId },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
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

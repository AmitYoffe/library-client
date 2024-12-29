import {
  StyledCancelBtn,
  StyledDialogActions,
  StyledFormDialog,
  StyledSubmitBtn,
} from "@/app/(main)/common/components/dialogs/addItem/styled";
import { useAddBook } from "@/app/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { FormFields } from "../FormFields";
import { BookFormFields, bookSchema } from "../schema";

type AddBookFormDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const AddBookFormDialog = ({
  open,
  handleClose,
}: AddBookFormDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormFields>({
    resolver: zodResolver(bookSchema),
  });

  const addBookMutation = useAddBook();

  const onSubmit = (data: BookFormFields) => {
    addBookMutation.mutate(data, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <StyledFormDialog>
        <DialogTitle>הוספת ספר חדש</DialogTitle>
        <FormFields register={register} errors={errors} />
        <StyledDialogActions>
          <StyledCancelBtn onClick={handleClose} variant="contained">
            ביטול
          </StyledCancelBtn>
          <StyledSubmitBtn type="submit" variant="contained">
            שמירה
          </StyledSubmitBtn>
        </StyledDialogActions>
      </StyledFormDialog>
    </Dialog>
  );
};

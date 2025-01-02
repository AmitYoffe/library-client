import {
  StyledDialogActions,
  StyledFormDialog,
} from "@/app/(main)/common/components/dialogs/addItem/styled";
import { FormButtons } from "@/app/(main)/common/components/FormButtons";
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

  const { mutate } = useAddBook();

  const onSubmit = (data: BookFormFields) => {
    mutate(data, {
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
          <FormButtons handleClose={handleClose} />
        </StyledDialogActions>
      </StyledFormDialog>
    </Dialog>
  );
};

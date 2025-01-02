import {
  StyledDialogActions,
  StyledFormDialog,
} from "@/app/(main)/common/components/dialogs/addItem/styled";
import { FormButtons } from "@/app/(main)/common/components/FormButtons";
import { FormFields as WriterFormFields } from "@/app/(main)/writers/components/FormFields";
import { useAddWriter } from "@/app/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { WriterFormFieldsType, writerSchema } from "../schema";

type AddWriterFormDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const AddWriterFormDialog = ({
  open,
  handleClose,
}: AddWriterFormDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriterFormFieldsType>({
    resolver: zodResolver(writerSchema),
  });

  const { mutate } = useAddWriter();

  const onSubmit = (data: WriterFormFieldsType) => {
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
        <DialogTitle>הוספת סופר חדש</DialogTitle>
        <WriterFormFields register={register} errors={errors} />
        <StyledDialogActions>
          <FormButtons handleClose={handleClose} />
        </StyledDialogActions>
      </StyledFormDialog>
    </Dialog>
  );
};

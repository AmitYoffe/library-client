import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { JSX } from "react";
import {
  StyledCancelBtn,
  StyledDialogActions,
  StyledFormDialog,
  StyledSubmitBtn,
} from "./styled";

type AddItemFormDialogProps = {
  open: boolean;
  handleClose: () => void;
  currentMutation: UseMutationResult<
    AxiosResponse<any, any>,
    Error,
    any,
    unknown
  >;
  fields: JSX.Element;
  title: string;
};

export function AddItemFormDialog({
  open,
  handleClose,
  currentMutation,
  fields,
  title,
}: AddItemFormDialogProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    currentMutation.mutate(formJson, {
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
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          handleSubmit(event);
        },
      }}
    >
      <StyledFormDialog>
        <DialogTitle>הוספת {title} חדש</DialogTitle>
        {/* add zod errors here */}
        {fields}
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
}

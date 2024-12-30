import { FormButtons } from "@/app/(main)/common/components/FormButtons";
import { StyledMenuItem } from "@/app/(main)/common/components/styled";
import { useEditWriter } from "@/app/api";
import { zodResolver } from "@hookform/resolvers/zod";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Writer } from "../../../../common/dto/writer";
import { WriterFormFieldsType, writerSchema } from "../../schema";
import { StyledEditDialogCard } from "../styled";
import { EditWriterFields } from "./EditWriterFields";

type EditWriterDialogProps = {
  writer: Writer;
};

export const EditWriterDialog = ({ writer }: EditWriterDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriterFormFieldsType>({
    resolver: zodResolver(writerSchema),
  });

  const { mutate: editMutation } = useEditWriter();

  const onSubmit = (data: WriterFormFieldsType) => {
    const updatedWriter = { ...writer, ...data };

    editMutation(updatedWriter, {
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
        <StyledEditDialogCard>
          <Typography fontSize={24}>ערוך סופר</Typography>
          <EditWriterFields
            writer={writer}
            register={register}
            errors={errors}
          />
          <FormButtons handleClose={handleClose} />
        </StyledEditDialogCard>
      </Dialog>
    </>
  );
};

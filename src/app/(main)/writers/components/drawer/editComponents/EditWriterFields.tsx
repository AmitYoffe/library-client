import { TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Writer } from "../../../../common/dto/writer";
import { EditWriterFormFields } from "../../schema";

type EditWriterFieldsProps = {
  writer: Writer;
  register: UseFormRegister<EditWriterFormFields>;
  errors: FieldErrors<EditWriterFormFields>;
};

export const EditWriterFields = ({
  writer,
  register,
  errors,
}: EditWriterFieldsProps) => {
  console.log("errors: ", errors);

  return (
    <>
      <TextField
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        required
        fullWidth
        id="firstName"
        name="firstName"
        label="שם פרטי"
        type="text"
        defaultValue={writer.firstName}
      />
      <TextField
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        required
        fullWidth
        id="lastName"
        name="lastName"
        label="שם משפחה"
        type="text"
        defaultValue={writer.lastName}
      />
    </>
  );
};

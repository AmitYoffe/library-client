import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StyledTextField } from "../../common/components/styled";
import { WriterFormFieldsType } from "./schema";

type FormFieldsProps = {
  register: UseFormRegister<WriterFormFieldsType>;
  errors: FieldErrors<WriterFormFieldsType>;
};

export const FormFields = ({ errors, register }: FormFieldsProps) => {
  return (
    <>
      <StyledTextField
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        autoFocus
        margin="dense"
        id="firstName"
        name="firstName"
        label="שם פרטי"
        type="text"
        fullWidth
      />
      <StyledTextField
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        margin="dense"
        id="lastName"
        name="lastName"
        label="שם משפחה"
        type="text"
        fullWidth
      />
    </>
  );
};

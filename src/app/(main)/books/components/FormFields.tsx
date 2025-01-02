import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StyledTextField } from "./drawer/editComponents/styled";
import { WriterSelectionDropdown } from "./WriterSelectionDropdown";
import { BookFormFields } from "./schema";

type FormFieldsProps = {
  register: UseFormRegister<BookFormFields>;
  errors: FieldErrors<BookFormFields>;
};

export const FormFields = ({ errors, register }: FormFieldsProps) => {
  return (
    <>
      <StyledTextField
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        autoFocus
        required
        margin="dense"
        id="title"
        name="title"
        label="כותרת"
        type="text"
        fullWidth
      />
      <WriterSelectionDropdown
        register={register}
        errors={errors}
        initialWriterId={"0"}
      />
      <StyledTextField
        {...register("count")}
        error={!!errors.count}
        helperText={errors.count?.message}
        required
        margin="dense"
        id="count"
        name="count"
        label="כמות המלאי"
        type="number"
        placeholder="000"
        fullWidth
      />
    </>
  );
};

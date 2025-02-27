import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StyledTextField } from "../../common/components/styled";
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

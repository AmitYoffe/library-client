import { StyledTextField } from "@/app/(main)/common/components/styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Writer } from "../../../../common/dto/writer";
import { WriterFormFieldsType } from "../../schema";

type EditWriterFieldsProps = {
  writer: Writer;
  register: UseFormRegister<WriterFormFieldsType>;
  errors: FieldErrors<WriterFormFieldsType>;
};

export const EditWriterFields = ({
  writer,
  register,
  errors,
}: EditWriterFieldsProps) => {
  return (
    <>
      <StyledTextField
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
      <StyledTextField
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

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Book } from "../../../../common/dto/book";
import { BookFormFields } from "../../schema";
import { WriterSelectionDropdown } from "../../WriterSelectionDropdown";
import { StyledFieldsContainer, StyledTextField } from "./styled";

type EditBookFieldsProps = {
  book: Book;
  register: UseFormRegister<BookFormFields>;
  errors: FieldErrors<BookFormFields>;
};

export const EditBookFields = ({
  book,
  register,
  errors,
}: EditBookFieldsProps) => {
  return (
    <StyledFieldsContainer>
      <WriterSelectionDropdown register={register} errors={errors} />
      <StyledTextField
        {...register("count")}
        error={!!errors.count}
        helperText={errors.count?.message}
        required
        fullWidth
        id="count"
        name="count"
        label="כמות המלאי"
        type="number"
        placeholder="000"
        defaultValue={book.count}
      />
    </StyledFieldsContainer>
  );
};

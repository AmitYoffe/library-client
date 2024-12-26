import { Writer } from "@/app/(main)/common/dto/writer";
import { useGetAllWriters } from "@/app/api";
import { FormControl, MenuItem } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Book } from "../../../../common/dto/book";
import { EditBookFormFields } from "./schema";
import { StyledFieldsContainer, StyledSelect, StyledTextField } from "./styled";

type EditBookFieldsProps = {
  book: Book;
  register: UseFormRegister<EditBookFormFields>;
  errors: FieldErrors<EditBookFormFields>;
};

export const EditBookFields = ({
  book,
  register,
  errors,
}: EditBookFieldsProps) => {
  const { data } = useGetAllWriters();
  const writers: Writer[] = data?.data;

  const [selectedWriter, setSelectedWriter] = useState<number>(
    book.writerId || 0
  );

  const handleWriterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedWriter(+event.target.value);
  };

  return (
    <StyledFieldsContainer>
      <FormControl fullWidth>
        <StyledSelect
          select
          fullWidth
          {...register("writerId")}
          error={!!errors.writerId}
          helperText={!!errors.writerId}
          id="writerId"
          name="writerId"
          value={selectedWriter}
          onChange={handleWriterChange}
        >
          {writers && writers.length > 0 ? (
            writers.map((writer: Writer) => (
              <MenuItem key={writer.id} value={writer.id}>
                {`${writer.firstName} ${writer.lastName}`}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              No writers available
            </MenuItem>
          )}
        </StyledSelect>
      </FormControl>
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

import { useGetAllWriters } from "@/app/api";
import { FormControl, MenuItem } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Writer } from "../../common/dto/writer";
import { BookFormFields } from "./schema";
import { StyledSelect } from "./drawer/editComponents/styled";

type WriterSelectionDropdownProps = {
  register: UseFormRegister<BookFormFields>;
  errors: FieldErrors<BookFormFields>;
  initialWriterId: number;
};

export const WriterSelectionDropdown = ({
  register,
  errors,
  initialWriterId,
}: WriterSelectionDropdownProps) => {
  const { data } = useGetAllWriters();
  const writers: Writer[] = data?.data;

  const [selectedWriter, setSelectedWriter] = useState<number>(initialWriterId);

  const handleWriterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedWriter(+event.target.value);
  };

  return (
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
        placeholder="שם סופר"
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
  );
};

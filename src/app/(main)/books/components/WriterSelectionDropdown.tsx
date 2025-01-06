import { useGetAllWriters } from "@/app/api";
import { MenuItem } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Writer } from "../../common/dto/writer";
import { StyledSelect } from "./drawer/editComponents/styled";
import { BookFormFields } from "./schema";

type WriterSelectionDropdownProps = {
  register: UseFormRegister<BookFormFields>;
  errors: FieldErrors<BookFormFields>;
  initialWriterId: string;
};

export const WriterSelectionDropdown = ({
  register,
  errors,
  initialWriterId,
}: WriterSelectionDropdownProps) => {
  const { data } = useGetAllWriters();
  const writers: Writer[] = data?.data || [];

  const [selectedWriter, setSelectedWriter] = useState(initialWriterId);

  const handleWriterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedWriter(event.target.value);
  };

  return (
    <StyledSelect
      select
      fullWidth
      {...register("writerId")}
      error={!!errors.writerId}
      helperText={errors.writerId?.message}
      id="writerId"
      name="writerId"
      type="number"
      value={selectedWriter}
      defaultValue=""
      onChange={handleWriterChange}
      placeholder="שם סופר"
    >
      {writers && writers.length > 0 ? (
        writers.map((writer: Writer) => (
          <MenuItem key={writer.id} value={writer.id.toString()}>
            {`${writer.firstName} ${writer.lastName}`}
          </MenuItem>
        ))
      ) : (
        <MenuItem value="0" disabled>
          No writers available
        </MenuItem>
      )}
    </StyledSelect>
  );
};

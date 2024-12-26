import { Writer } from "@/app/(main)/common/dto/writer";
import { useGetAllWriters } from "@/app/api";
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { useState } from "react";
import { Book } from "../../../../common/dto/book";
import { StyledFieldsContainer, StyledSelect, StyledTextField } from "./styled";

type EditBookFieldsProps = {
  book: Book;
};

export const EditBookFields = ({ book }: EditBookFieldsProps) => {
  const { data } = useGetAllWriters();
  const writers = data?.data;

  const [selectedWriter, setSelectedWriter] = useState<string>(
    book.writerId || ""
  );

  const handleWriterChange = (event: SelectChangeEvent<string>) => {
    setSelectedWriter(event.target.value);
  };

  return (
    <StyledFieldsContainer>
      <FormControl fullWidth>
        <InputLabel>סופר</InputLabel>
        <StyledSelect
          id="writerId"
          name="writerId"
          value={selectedWriter}
          onChange={() => handleWriterChange}
        >
          {writers?.map((writer: Writer) => (
            <MenuItem key={writer.id} value={writer.id}>
              {`${writer.firstName} ${writer.firstName}`}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <StyledTextField
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

// add zod errors here

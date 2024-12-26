import { useGetAllWriters } from "@/app/api";
import { Book } from "../../../../common/dto/book";
import { StyledTextField } from "./styled";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Writer } from "@/app/(main)/common/dto/writer";

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
    <>
      <FormControl fullWidth>
        <InputLabel>סופר</InputLabel>
        <Select
          id="writerId"
          name="writerId"
          value={selectedWriter}
          onChange={handleWriterChange}
        >
          {writers?.map((writer: Writer) => (
            <MenuItem key={writer.id} value={writer.id}>
              {`${writer.firstName} ${writer.firstName}`}
            </MenuItem>
          ))}
        </Select>
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
    </>
  );
};

// add zod errors here

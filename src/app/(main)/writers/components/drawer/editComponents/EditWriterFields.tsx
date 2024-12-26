import { TextField } from "@mui/material";
import { Writer } from "../../../dtos/writer";

type EditWriterFieldsProps = {
  writer: Writer;
};

export const EditWriterFields = ({ writer }: EditWriterFieldsProps) => {
  return (
    <>
      <TextField
        required
        fullWidth
        id="firstName"
        name="firstName"
        label="שם פרטי"
        type="text"
        defaultValue={writer.firstName}
      />
      <TextField
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

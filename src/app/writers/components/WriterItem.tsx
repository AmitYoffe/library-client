import { Box, Card, TextField } from "@mui/material";
import { Writer } from "../dtos/writer";

type WriterItem = {
  writer: Writer;
};

export const WriterItem = ({ writer }: WriterItem) => {
  return (
    <Card>
      <Box sx={{ width: "100px", height: "100px", backgroundColor: "green" }}>
        Nigger
      </Box>
      <TextField>{`${writer.firstName} - ${writer.lastName}`}</TextField>
      <TextField>{`${writer.books} כמות הקוראים: `}</TextField>
    </Card>
  );
};

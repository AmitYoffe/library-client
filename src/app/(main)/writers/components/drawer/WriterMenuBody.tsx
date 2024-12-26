import { useGetBooksByWriter } from "@/app/api";
import { Box, Button, Typography } from "@mui/material";
import { Writer } from "../../dtos/writer";
import { StyledMenuBox } from "./styled";
import { WriterBookList } from "./WriterBookList";
import { Book } from "@/app/(main)/books/dtos/book";

type WriterMenuBodyProps = {
  writer: Writer;
};

export function WriterMenuBody({ writer }: WriterMenuBodyProps) {
  const { data, isLoading, error } = useGetBooksByWriter(writer.id);
  const books: Book[] = data?.data || [];

  return (
    <Box padding={2}>
      <StyledMenuBox>
        <Typography fontSize={20}>רשימת קוראים ({books.length})</Typography>
        <Button variant="contained">השאל</Button>
      </StyledMenuBox>
      <WriterBookList books={books} isLoading={isLoading} error={error} />
    </Box>
  );
}

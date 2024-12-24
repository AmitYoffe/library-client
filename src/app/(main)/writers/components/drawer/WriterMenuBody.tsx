import { Book } from "@/app/(main)/books/dtos/book";
import { useGetBooksByWriter } from "@/app/api";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { StyledMenuBox } from "./styled";
import { WriterBookList } from "./WriterBookList";
import { Writer } from "../../dtos/writer";

type WriterMenuBodyProps = {
  writer: Writer;
};

export function WriterMenuBody({ writer }: WriterMenuBodyProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const { data, isLoading, error } = useGetBooksByWriter(writer.id);

  useEffect(() => {
    setBooks(data?.data);
  }, []);

  return (
    <Box padding={2}>
      <StyledMenuBox>
        {/* <Typography fontSize={20}>רשימת קוראים ({books.length})</Typography> */}
        <Button variant="contained">השאל</Button>
      </StyledMenuBox>
      <WriterBookList books={books} isLoading={isLoading} error={error} />
    </Box>
  );
}

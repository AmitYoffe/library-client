import { StyledMenuBox } from "@/app/(main)/common/components/styled";
import { Book } from "@/app/(main)/common/dto/book";
import { useGetBooksByWriter } from "@/app/api";
import { Box, Typography } from "@mui/material";
import { Writer } from "../../../common/dto/writer";
import { WriterBookList } from "./WriterBookList";

type WriterMenuBodyProps = {
  writer: Writer;
};

export const WriterMenuBody = ({ writer }: WriterMenuBodyProps) => {
  const { data, isLoading, error } = useGetBooksByWriter(writer.id);
  const books: Book[] = data?.data || [];

  return (
    <Box padding={2}>
      <StyledMenuBox>
        <Typography fontSize={20}>רשימת ספרים ({books.length})</Typography>
      </StyledMenuBox>
      <WriterBookList books={books} isLoading={isLoading} error={error} />
    </Box>
  );
};

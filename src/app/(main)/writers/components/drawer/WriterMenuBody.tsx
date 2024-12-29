import { StyledMenuBox } from "@/app/(main)/common/components/styled";
import { Book } from "@/app/(main)/common/dto/book";
import { useGetBooksByWriter } from "@/app/api";
import { Box, Button, Typography } from "@mui/material";
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
        <Button variant="contained">הוסף ספר</Button>
        {/*
          i am pretty sure this button is useless.
          If i want to add a book i will do it from the add book dialog, 
          and if this button is used to add a writer to a an existing book,
          then i would also do it through the edit book dialog.
          (( The only possible solution is that 1 book will be able to have many writers,
            this will require a backed change...))
        */}
      </StyledMenuBox>
      <WriterBookList books={books} isLoading={isLoading} error={error} />
    </Box>
  );
};

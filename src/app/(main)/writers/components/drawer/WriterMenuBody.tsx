import { StyledMenuBox } from "@/app/(main)/common/components/styled";
import { Book } from "@/app/(main)/common/dto/book";
import { Box, Typography } from "@mui/material";
import { WriterBookList } from "./WriterBookList";

type WriterMenuBodyProps = {
  booksOfWriter: Book[];
  error: Error | null;
  isLoading: boolean;
};

export const WriterMenuBody = ({
  booksOfWriter,
  error,
  isLoading,
}: WriterMenuBodyProps) => {
  
  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching books</Box>;

  return (
    <Box padding={2}>
      <StyledMenuBox>
        <Typography fontSize={20}>
          רשימת ספרים ({booksOfWriter.length})
        </Typography>
      </StyledMenuBox>
      <WriterBookList books={booksOfWriter} />
    </Box>
  );
};

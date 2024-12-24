import { BookBorrowersList } from "@/app/(main)/books/components/BookBorrowersList";
import { isWriter } from "@/utils/isWriter";
import { Box, Button, Typography } from "@mui/material";
import { StyledMenuBox } from "./styled";
import { WriterBookList } from "@/app/(main)/writers/components/WriterBookList";

type MenuBodyProps = {
  dataItem: Record<string, any>;
};

export function MenuBody({ dataItem }: MenuBodyProps) {
  return (
    <Box padding={2}>
      <StyledMenuBox>
        <Typography fontSize={20}>רשימת קוראים\ספרים</Typography>
        <Button variant="contained">הוסף</Button>
      </StyledMenuBox>
      {isWriter(dataItem) ? (
        <WriterBookList writerId={dataItem.id} />
      ) : (
        <BookBorrowersList bookId={dataItem.id} />
      )}
    </Box>
  );
}

// this is not really generic
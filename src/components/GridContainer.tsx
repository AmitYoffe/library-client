import { Box, Grid2, Typography } from "@mui/material";
import { BookItem } from "../app/(main)/books/components/BookItem";
import { Book } from "../app/(main)/books/dtos/book";
import { WriterItem } from "../app/(main)/writers/components/WriterItem";
import { Writer } from "../app/(main)/writers/dtos/writer";
import { StyledGridContainer } from "../app/(main)/components/styled";

type GridContainerProps = {
  data: Writer[] | Book[];
  title: "סופרים" | "ספרים";
};

function isWriter(dataItem: Writer | Book): boolean {
  return (dataItem as Writer).firstName !== undefined;
}

export function GridContainer({ data, title }: GridContainerProps) {
  if (!data || data.length === 0) {
    return <Typography>No data available</Typography>;
  }

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container spacing={2}>
        {data.map((dataItem, index) => (
          <Grid2 key={index}>
            {isWriter(dataItem) ? (
              <WriterItem writer={dataItem as Writer} />
            ) : (
              <BookItem book={dataItem as Book} />
            )}
          </Grid2>
        ))}
      </StyledGridContainer>
    </Box>
  );
}

import { BookItem } from "../books/components/BookItem";
import { Book } from "../books/dtos/book";
import { WriterItem } from "../writers/components/WriterItem";
import { Writer } from "../writers/dtos/writer";
import { StyledGridContainer } from "./styled";

interface DataGridProps {
  data: Writer[] | Book[];
}

function isWriter(dataItem: Writer | Book): dataItem is Writer {
  return (dataItem as Writer).books === undefined;
} // what

export default function DataGrid({ data }: DataGridProps) {
  console.log("dataItem: ", data[0]);

  return (
    <StyledGridContainer container>
      {data.map((dataItem, index) =>
        isWriter(dataItem) ? (
          <WriterItem writer={dataItem as Writer} key={index} />
        ) : (
          <BookItem book={dataItem as Book} key={index} />
        )
      )}
    </StyledGridContainer>
  );
}

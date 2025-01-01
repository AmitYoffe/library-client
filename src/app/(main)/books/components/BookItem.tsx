import { useGetWriterById } from "@/app/api";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Book } from "../../common/dto/book";
import { Writer } from "../../common/dto/writer";
import { DefaultPic } from "./DefaultPic";
import {
  StyledBookCardActionArea,
  StyledBookInfoBox,
  StyledInfoIconBox,
} from "./styled";

type BookItemType = {
  book: Book;
  toggleDrawer: (newOpen: boolean, book?: Book) => void;
};

export const BookItem = ({ book, toggleDrawer }: BookItemType) => {
  const { data } = useGetWriterById(book.writerId);
  const writer: Writer = data?.data;

  return (
    <StyledBookCardActionArea onClick={() => toggleDrawer(true, book)}>
      <DefaultPic />
      <StyledBookInfoBox>
        <Typography fontSize={18}>{book.title}</Typography>
        <Typography fontSize={12}>
          {writer ? `${writer.firstName} ${writer.lastName}` : "פלוני אלמוני"}
        </Typography>
        <Typography fontSize={12}>{`עותקים זמינים: ${book.count}`}</Typography>
      </StyledBookInfoBox>
      <StyledInfoIconBox>
        <Image
          src="/infoIcon.svg"
          alt="Profile Picture"
          width={25}
          height={25}
        />
      </StyledInfoIconBox>
    </StyledBookCardActionArea>
  );
};

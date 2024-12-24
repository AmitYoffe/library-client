import { Typography } from "@mui/material";
import Image from "next/image";
import DefaultPic from "./DefaultPic";
import {
  StyledBookCardActionArea,
  StyledBookInfoBox,
  StyledInfoIconBox,
} from "./styled";
import { Book } from "../dtos/book";

type BookItemType = {
  book: Book;
  toggleDrawer: (newOpen: boolean, book?: Book) => void;
};

export const BookItem = ({ book, toggleDrawer }: BookItemType) => {
  return (
    <StyledBookCardActionArea onClick={() => toggleDrawer(true, book)}>
      <DefaultPic />
      <StyledBookInfoBox>
        <Typography fontSize={18}>{book.title}</Typography>
        <Typography fontSize={12}>{book.writerId}</Typography>
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

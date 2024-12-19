import { Typography } from "@mui/material";
import Image from "next/image";
import { Book } from "../dtos/book";
import DefaultPic from "./DefaultPic";
import {
  StyledBookInfoBox,
  StyledBookItemContainer,
  StyledInfoIconBox,
} from "./styled";

type BookItemType = {
  book: Book;
};

export const BookItem = ({ book }: BookItemType) => {
  return (
    <>
      <StyledBookItemContainer>
        <DefaultPic />
        <StyledBookInfoBox>
          <Typography fontSize={18}>{book.title}</Typography>
          {/* <Typography fontSize={8}>{`${book.writerId} `}</Typography> */}
          <Typography fontSize={12}>{"book.writer "}</Typography>
          <Typography
            fontSize={12}
          >{`עותקים זמינים: ${book.count}`}</Typography>
        </StyledBookInfoBox>
        <StyledInfoIconBox>
          <Image
            src="/infoIcon.svg"
            alt="Profile Picture"
            width={25}
            height={25}
          />
        </StyledInfoIconBox>
      </StyledBookItemContainer>
    </>
  );
};

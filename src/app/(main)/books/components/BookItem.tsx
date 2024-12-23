import { Typography } from "@mui/material";
import Image from "next/image";
import { ItemMenu } from "../../components/dialogs/itemMenu/ItemMenu";
import { Book } from "../dtos/book";
import DefaultPic from "./DefaultPic";
import {
  StyledBookCardActionArea,
  StyledBookInfoBox,
  StyledInfoIconBox,
} from "./styled";

type BookItemType = {
  book: Book;
  toggleDrawer: (newOpen: boolean) => void;
  open: boolean;
};

export const BookItem = ({ book, toggleDrawer, open }: BookItemType) => {
  return (
    <>
      <StyledBookCardActionArea onClick={() => toggleDrawer(true)}>
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
      </StyledBookCardActionArea>
      <ItemMenu dataItem={book} open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

import { MoreBookActions } from "@/app/(main)/books/components/drawer/MoreBookActions";
import { StyledBox } from "@/app/(main)/common/components/styled";
import { Writer } from "@/app/(main)/common/dto/writer";
import { StyledDefaultPicBox } from "@/app/(main)/writers/components/drawer/styled";
import { useGetBorrowsCount, useGetWriterByBook } from "@/app/api";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Book } from "../../../common/dto/book";

type BookMenuHeaderProps = {
  book: Book;
};

export const BookMenuHeader = ({ book }: BookMenuHeaderProps) => {
  const { data } = useGetWriterByBook(book.id);
  const writer: Writer = data?.data;

  const { data: bookBorrowsCountData } = useGetBorrowsCount(book.id);
  const bookBorrowsCount: number = bookBorrowsCountData?.data;

  const bookStock = book.count - bookBorrowsCount;

  return (
    <StyledBox>
      <StyledDefaultPicBox>
        <Image
          src={"/questionMark.svg"}
          alt="Default Icon"
          width={85}
          height={85}
        />
      </StyledDefaultPicBox>
      <Box>
        <Typography fontSize={24}>{book.title}</Typography>
        <Typography>
          {writer && `${writer.firstName} ${writer.lastName}`}
        </Typography>
        <Typography>מס' עותקים: {bookStock}</Typography>
      </Box>
      <MoreBookActions book={book} />
    </StyledBox>
  );
};

import { MoreBookActions } from "@/app/(main)/books/components/drawer/MoreBookActions";
import { StyledBox } from "@/app/(main)/common/components/styled";
import { Writer } from "@/app/(main)/common/dto/writer";
import { StyledDefaultPicBox } from "@/app/(main)/writers/components/drawer/styled";
import { useGetWriterByBook } from "@/app/api";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Book } from "../../../common/dto/book";

type BookMenuHeaderProps = {
  book: Book;
};

export const BookMenuHeader = ({ book }: BookMenuHeaderProps) => {
  const { data } = useGetWriterByBook(book.id);
  const writer: Writer = data?.data;

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
        {/* // Todo: substract user borrows count from book.count to display the books in stock and not original book count
                    -- I can make a util for it  */}
        <Typography>מס' עותקים: {book.count}</Typography>
      </Box>
      <MoreBookActions book={book} />
    </StyledBox>
  );
};

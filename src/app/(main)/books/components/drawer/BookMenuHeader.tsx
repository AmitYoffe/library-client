import { MoreBookActions } from "@/app/(main)/books/components/drawer/MoreBookActions";
import { StyledBox } from "@/app/(main)/components/dialogs/itemMenu/styled";
import { StyledDefaultPicBox } from "@/app/(main)/writers/components/drawer/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Book } from "../../dtos/book";

type BookMenuHeaderProps = {
  book: Book;
};

export function BookMenuHeader({ book }: BookMenuHeaderProps) {
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
        {/* <Typography>{writer}</Typography> */}
        <Typography>מס' עותקים: {book.count}</Typography>
      </Box>
      <MoreBookActions book={book} />
    </StyledBox>
  );
}

"use client";
import { StyledRoutePageContainer, StyledTitle } from "@/components/styled";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { BookItem } from "./(main)/books/components/BookItem";
import { Book } from "./(main)/common/dto/book";
import { StyledGridContainer } from "./(main)/components/styled";

export default function Home() {
  const userBorrows: Book[] = [
    {
      id: 1,
      title: "Dark Romance With The Kaban",
      count: 20,
      writerId: "2",
    },
  ];

  return (
    <StyledRoutePageContainer>
      <StyledTitle>
        <Typography fontSize={40}>כל הספרים שאתה שואל כרגע:</Typography>
        <Image
          src={"/sad-emoji.gif"}
          alt={"really sad emoji"}
          width={30}
          height={30}
        />
      </StyledTitle>
      <StyledGridContainer container>
        {userBorrows.map((book, index) => (
          <Grid2 key={index}>
            <BookItem book={book} toggleDrawer={() => {}} />
          </Grid2>
        ))}
      </StyledGridContainer>
    </StyledRoutePageContainer>
  );
}

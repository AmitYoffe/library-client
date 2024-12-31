"use client";
import { StyledRoutePageContainer, StyledTitle } from "@/components/styled";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { BookItem } from "./(main)/books/components/BookItem";
import { StyledGridContainer } from "./(main)/common/components/styled";
import { Book } from "./(main)/common/dto/book";
import { useGetUserBorrowedBooks, useGetUserInfoFromJwt } from "./api";

export default function HomePage() {
  const { data: jwtUserInfo } = useGetUserInfoFromJwt();
  const user = jwtUserInfo?.data;

  const { data: books, isLoading, error } = useGetUserBorrowedBooks(user?.sub);

  const borrowedBooks: Book[] = books?.data;

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching your borrowed books</Box>;

  return (
    <StyledRoutePageContainer>
      <StyledTitle>
        <Typography fontSize={40}>
          אהלן וסאהלן
          <br />
          {user?.username}
        </Typography>
        <Typography fontSize={32}>כל הספרים שאתה שואל כרגע:</Typography>
        <Image
          src={"/sad-emoji.gif"}
          alt={"really sad emoji"}
          width={30}
          height={30}
        />
      </StyledTitle>
      <StyledGridContainer container>
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book: Book, index: number) => (
            <Grid2 key={index}>
              <BookItem book={book} toggleDrawer={() => {}} />
            </Grid2>
          ))
        ) : (
          <Box>אינך ספרים בבית יחנון</Box>
        )}
      </StyledGridContainer>
    </StyledRoutePageContainer>
  );
}

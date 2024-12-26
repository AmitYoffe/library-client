"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import { StyledHeaderBox } from "./styled/StyledHeaderBox";

export const Header = () => {
  return (
    <StyledHeaderBox>
      <Image
        src={"/systemIcon.svg"}
        alt={"cool ass sifriya"}
        width={42}
        height={42}
      />
      <Typography fontSize={35}>הספריה</Typography>
    </StyledHeaderBox>
  );
};

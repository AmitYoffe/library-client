"use client"; // move this higher up in the future
import { Typography } from "@mui/material";
import Image from "next/image";
import { StyledHeaderBox } from "./styled/StyledHeaderBox";

export const Header = () => {
  return (
    <StyledHeaderBox>
      <Typography>הספריה</Typography>
      <Image
        src={"@public/systemIcon.svg"}
        alt={"cool ass sifriya"}
        width={50}
        height={50}
      />
      {/* <SystemIcon /> */}
    </StyledHeaderBox>
  );
};

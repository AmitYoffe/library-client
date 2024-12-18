import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { StyledHeaderContainer } from "./styled";

export default function LoginHeader() {
  return (
    <StyledHeaderContainer>
      <Typography variant="h4">התחברות</Typography>
      <Image
        src={"/systemIcon.svg"}
        alt={"cool ass sifriya icon"}
        width={42}
        height={42}
      />
    </StyledHeaderContainer>
  );
}

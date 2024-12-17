"use client";
import { Box } from "@mui/material";
import { StyledSideBarBox } from "./styled/StyledSideBarBox";
import Link from "next/link";

export const SideBar = () => {
  return (
    <StyledSideBarBox>
      <Link href={"/"}>home page</Link>
      <Link href={"/writers"}>writers</Link>
      <Box>ICON3</Box>
    </StyledSideBarBox>
  );
};

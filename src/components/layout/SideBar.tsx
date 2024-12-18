"use client";
import { StyledSideBarBox } from "./styled/StyledSideBarBox";
import Link from "next/link";
import Image from "next/image";

export const SideBar = () => {
  return (
    <StyledSideBarBox>
      <Link href={"/writers"}>
        <Image
          src={"/writerIcon.svg"}
          alt={"cool ass writer icon"}
          width={44}
          height={44}
        />
      </Link>
      <Link href={"/books"}>
        <Image
          src={"/bookIcon.svg"}
          alt={"cool ass book icon"}
          width={44}
          height={44}
        />
      </Link>
    </StyledSideBarBox>
  );
};

"use client";
import Image from "next/image";
import Link from "next/link";
import { StyledSideBarBox } from "./styled/StyledSideBarBox";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();
  const isBtnActive = (href: string) => pathname === href;

  return (
    <StyledSideBarBox>
      <Link href={"/books"}>
        <Image
          src={
            isBtnActive("/books") ? "/selectedBookIcon.svg" : "/bookIcon.svg"
          }
          alt={"cool ass book icon"}
          width={44}
          height={44}
        />
      </Link>
      <Link href={"/writers"}>
        <Image
          src={
            isBtnActive("/writers")
              ? "/selectedWriterIcon.svg"
              : "/writerIcon.svg"
          }
          alt={"cool ass writer icon"}
          width={44}
          height={44}
        />
      </Link>
    </StyledSideBarBox>
  );
};

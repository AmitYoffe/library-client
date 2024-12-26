import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { StyledSideBarBox } from "./styled/StyledSideBarBox";

export const SideBar = async () => {
  const headersList = headers();
  const fullUrl = (await headersList).get("referer") || "";

  const isBtnActive = (href: string) => fullUrl.includes(href);

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

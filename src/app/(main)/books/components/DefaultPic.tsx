import Image from "next/image";
import { StyledDefaultPicBox } from "./styled";

export const DefaultPic = () => {
  return (
    <StyledDefaultPicBox>
      <Image
        src="/questionMark.svg"
        alt="Question Icon"
        width={50}
        height={50}
      />
    </StyledDefaultPicBox>
  );
};

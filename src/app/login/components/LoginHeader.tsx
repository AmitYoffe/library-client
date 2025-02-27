import { Typography } from "@mui/material";
import Image from "next/image";
import { StyledHeaderContainer } from "../styled";

export const LoginHeader = () => {
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
};

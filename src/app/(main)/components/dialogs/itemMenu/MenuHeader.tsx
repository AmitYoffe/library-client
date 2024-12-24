import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MoreActions } from "./MoreActions";
import { StyledBox, StyledDefaultPicBox } from "./styled";

type MenuHeaderProps = {
  title: string;
  writer?: string;
  count?: string;
};

export function MenuHeader({ title, writer, count }: MenuHeaderProps) {
  return (
    <StyledBox>
      <StyledDefaultPicBox>
        <Image
          src={writer ? "/questionMark.svg" : "/defaultProfilePic.svg"}
          alt="Default Icon"
          width={85}
          height={85}
        />
      </StyledDefaultPicBox>
      <Box>
        <Typography fontSize={24}>{title}</Typography>
        <Typography>{writer}</Typography>
        <Typography>מס' עותקים: {count}</Typography>
      </Box>
      <MoreActions />
    </StyledBox>
  );
}

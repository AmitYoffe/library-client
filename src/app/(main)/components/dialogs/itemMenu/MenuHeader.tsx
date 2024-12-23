import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
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
      <IconButton sx={{ height: "40px" }}>
        <MoreVertIcon />
      </IconButton>
    </StyledBox>
  );
}

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../../dtos/writer";
import { MoreActions } from "./MoreActions";
import { StyledBox, StyledDefaultPicBox } from "./styled";

type WriterMenuHeaderProps = {
  writer: Writer;
};

export function WriterMenuHeader({ writer }: WriterMenuHeaderProps) {
  return (
    <StyledBox>
      <StyledDefaultPicBox>
        <Image
          src={"/defaultProfilePic.svg"}
          alt="Default Icon"
          width={85}
          height={85}
        />
      </StyledDefaultPicBox>
      <Box>
        <Typography
          fontSize={24}
        >{`${writer.firstName} ${writer.lastName}`}</Typography>
        <Typography>מס' עותקים: {9}</Typography>
      </Box>
      <MoreActions dataItem={writer} />
    </StyledBox>
  );
}

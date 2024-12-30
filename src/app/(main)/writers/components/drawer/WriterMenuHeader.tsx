import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../../../common/dto/writer";
import { MoreWriterActions } from "./MoreWriterActions";
import { StyledDefaultPicBox } from "./styled";
import { StyledBox } from "@/app/(main)/common/components/styled";

type WriterMenuHeaderProps = {
  writer: Writer;
};

export const WriterMenuHeader = ({ writer }: WriterMenuHeaderProps) => {
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
        {/* // Todo: get the real bookAmountOfWriter*/}
        <Typography>מס' עותקים: {9}</Typography>
      </Box>
      <MoreWriterActions writer={writer} />
    </StyledBox>
  );
};

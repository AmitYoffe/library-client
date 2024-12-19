import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../dtos/writer";
import { StyledWriterItemContainer } from "./styled";

type WriterItemType = {
  writer: Writer;
};

export const WriterItem = ({ writer }: WriterItemType) => {
  return (
    <StyledWriterItemContainer>
      <Box display={"flex"} alignItems={"center"}>
        <Image
          src="/defaultProfilePic.svg"
          alt="Profile Picture"
          width={60}
          height={60}
        />
        <Box display={"flex"} flexDirection={"column"} marginRight={2}>
          <Typography
            fontSize={20}
          >{`${writer.firstName} ${writer.lastName}`}</Typography>
          <Typography fontSize={11}>{`כמות הקוראים: ${writer.id}`}</Typography>
        </Box>
      </Box>
      <Image src="/infoIcon.svg" alt="Info Icon" width={30} height={30} />
    </StyledWriterItemContainer>
  );
};

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../dtos/writer";
import { StyledWriterItemContainer } from "./styled/StyledWriterItemContainer";

type WriterItem = {
  writer: Writer;
};

export const WriterItem = ({ writer }: WriterItem) => {
  return (
    <StyledWriterItemContainer>
      <Image
        src="/defaultProfilePic.svg"
        alt="Profile Picture"
        width={60}
        height={60}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          fontSize={20}
        >{`${writer.firstName} ${writer.lastName}`}</Typography>
        <Typography
          fontSize={11}
        >{`${writer.books} כמות הקוראים: `}</Typography>
      </Box>
      <Image src="/infoIcon.svg" alt="Info Icon" width={30} height={30} />
    </StyledWriterItemContainer>
  );
};

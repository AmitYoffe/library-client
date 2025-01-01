import { useGetActiveReaders } from "@/app/api";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../../common/dto/writer";
import { StyledWriterCardActionArea } from "./styled";

type WriterItemType = {
  writer: Writer;
  toggleDrawer: (newOpen: boolean, writer?: Writer) => void;
};

export const WriterItem = ({ writer, toggleDrawer }: WriterItemType) => {
  const { data } = useGetActiveReaders(writer.id);
  const activeReaderIds: number[] = data?.data || [];

  return (
    <StyledWriterCardActionArea onClick={() => toggleDrawer(true, writer)}>
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
          <Typography
            fontSize={11}
          >{`כמות הקוראים: ${activeReaderIds.length}`}</Typography>
        </Box>
      </Box>
      <Image src="/infoIcon.svg" alt="Info Icon" width={30} height={30} />
    </StyledWriterCardActionArea>
  );
};

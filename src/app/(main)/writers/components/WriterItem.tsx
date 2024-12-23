import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Writer } from "../dtos/writer";
import { StyledWriterCardActionArea } from "./styled";
import { ItemMenu } from "../../components/dialogs/itemMenu/ItemMenu";

type WriterItemType = {
  writer: Writer;
  toggleDrawer: (newOpen: boolean) => void;
  open: boolean;
};

export const WriterItem = ({ writer, toggleDrawer, open }: WriterItemType) => {
  return (
    <>
      <StyledWriterCardActionArea onClick={() => toggleDrawer(true)}>
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
            >{`כמות הקוראים: ${writer.id}`}</Typography>
          </Box>
        </Box>
        <Image src="/infoIcon.svg" alt="Info Icon" width={30} height={30} />
      </StyledWriterCardActionArea>
      <ItemMenu dataItem={writer} open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

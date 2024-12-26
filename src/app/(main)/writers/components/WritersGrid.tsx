import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { StyledGridContainer } from "../../components/styled";
import { Writer } from "../dtos/writer";
import { WriterItem } from "./WriterItem";
import { WriterDrawer } from "./drawer/WriterDrawer";

type WritersGridProps = {
  writers: Writer[];
  title: string;
};

export const WritersGrid = ({ writers, title }: WritersGridProps) => {
  const [open, setOpen] = useState(false);
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);

  const handleOpenDrawer = (writer: Writer) => {
    setSelectedWriter(writer);
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
    setSelectedWriter(null);
  };

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container>
        {writers.map((writer, index) => (
          <WriterItem
            writer={writer}
            toggleDrawer={() => handleOpenDrawer(writer)}
            key={index}
          />
        ))}
      </StyledGridContainer>
      {selectedWriter && (
        <WriterDrawer
          writer={selectedWriter}
          open={open}
          toggleDrawer={handleCloseDrawer}
        />
      )}
    </Box>
  );
};

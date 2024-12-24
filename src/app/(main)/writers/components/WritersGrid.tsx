import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { ItemMenu } from "../../components/dialogs/itemMenu/ItemMenu";
import { StyledGridContainer } from "../../components/styled";
import { Writer } from "../dtos/writer";
import { WriterItem } from "./WriterItem";

type WritersGridProps = {
  writers: Writer[];
  title: string;
};

export function WritersGrid({ writers, title }: WritersGridProps) {
  const [open, setOpen] = useState(false);
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);

  const toggleDrawer = (newOpen: boolean, writer?: Writer) => {
    setOpen(newOpen);
    if (writer) {
      setSelectedWriter(writer);
    }
  };

  return (
    <Box paddingX={"130px"} paddingTop={"80px"}>
      <Typography fontSize={50}>{title}</Typography>
      <StyledGridContainer container spacing={2}>
        {writers.map((writer, index) => (
          <Grid2 key={index}>
            <WriterItem writer={writer} toggleDrawer={toggleDrawer} />
          </Grid2>
        ))}
      </StyledGridContainer>
      {selectedWriter && (
        <ItemMenu
          dataItem={selectedWriter}
          open={open}
          toggleDrawer={(newOpen) => toggleDrawer(newOpen)}
        />
      )}
    </Box>
  );
}

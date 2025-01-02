import { useState } from "react";
import {
  StyledGridContainer,
  StyledGridMain,
  StyledPageTitle,
} from "../../common/components/styled";
import { Writer } from "../../common/dto/writer";
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
    <StyledGridMain>
      <StyledPageTitle>{title}</StyledPageTitle>
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
    </StyledGridMain>
  );
};

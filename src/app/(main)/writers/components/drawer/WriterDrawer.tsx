import { Box, Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Writer } from "../../dtos/writer";
import { WriterMenuBody } from "./WriterMenuBody";
import { WriterMenuHeader } from "./WriterMenuHeader";

type WriterDrawerProps = {
  writer: Writer;
  toggleDrawer: (newOpen: boolean) => void;
  open: boolean;
};

export const WriterDrawer = ({
  writer,
  toggleDrawer,
  open,
}: WriterDrawerProps) => {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 480 }} role="presentation">
        <WriterMenuHeader writer={writer} />
        <Divider />
        <WriterMenuBody writer={writer} />
      </Box>
    </Drawer>
  );
};

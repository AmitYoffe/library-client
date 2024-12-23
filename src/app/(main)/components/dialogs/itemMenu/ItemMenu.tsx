import { Box, Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MenuBody } from "./MenuBody";
import { MenuHeader } from "./MenuHeader";

// dataItem should change according to new selections,
// currently it gets stuck on first value given to it

type ItemMenuProps = {
  dataItem: Record<string, any>;
  toggleDrawer: (newOpen: boolean) => void;
  open: boolean;
};

export function ItemMenu({ dataItem, toggleDrawer, open }: ItemMenuProps) {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{ width: 480 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <MenuHeader
          title={
            dataItem.title || `${dataItem.firstName}  ${dataItem.lastName}`
          }
          count={dataItem.count}
          writer={dataItem.writer}
        />
        <Divider />
        <MenuBody dataItem={dataItem} />
      </Box>
    </Drawer>
  );
}

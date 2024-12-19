import { Box, Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MenuHeader } from "./MenuHeader";

export function ItemMenu() {
  return (
    <Card>
      <MenuHeader />
      <Divider />
      <Box>menu content</Box>
    </Card>
  );
}

// ItemMenu should be opened when i press an item

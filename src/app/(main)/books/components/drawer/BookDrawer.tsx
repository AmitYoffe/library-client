import { Box, Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Book } from "../../dtos/book";
import { BookMenuBody } from "./BookMenuBody";
import { BookMenuHeader } from "./BookMenuHeader";

type BookDrawerProps = {
  book: Book | null;
  toggleDrawer: (newOpen: boolean) => void;
  open: boolean;
};

export function BookDrawer({ book, toggleDrawer, open }: BookDrawerProps) {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 480 }} role="presentation">
        <BookMenuHeader book={book} />
        <Divider />
        <BookMenuBody book={book} />
      </Box>
    </Drawer>
  );
}
//  id: 2 = Gilboa "Rochelle

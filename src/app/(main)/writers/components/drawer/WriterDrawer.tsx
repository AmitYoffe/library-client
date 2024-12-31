import { Book } from "@/app/(main)/common/dto/book";
import { useGetBooksByWriter } from "@/app/api";
import { Box, Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Writer } from "../../../common/dto/writer";
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
  const { data, isLoading, error } = useGetBooksByWriter(writer.id);
  const books: Book[] = data?.data || [];

  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <Box width={480} role="presentation">
        <WriterMenuHeader writer={writer} bookStock={books.length} />
        <Divider />
        <WriterMenuBody
          booksOfWriter={books}
          isLoading={isLoading}
          error={error}
        />
      </Box>
    </Drawer>
  );
};

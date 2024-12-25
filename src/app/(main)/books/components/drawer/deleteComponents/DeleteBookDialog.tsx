import { useDeleteBook } from "@/app/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { StyledMenuItem } from "../../../../components/dialogs/itemMenu/styled";
import { Book } from "../../../dtos/book";
import { StyledDeleteDialogCard } from "../../styled";

type DeleteBookProps = {
  book: Book;
};

export function DeleteBookDialog({ book }: DeleteBookProps) {
  const [open, setOpen] = useState(false);

  const handleClickCancel = () => {
    setOpen(false);
  };

  const deleteMutation = useDeleteBook(book.id);

  const handleClickAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <StyledMenuItem onClick={() => setOpen(true)}>
        <DeleteOutlineIcon />
        Delete
      </StyledMenuItem>
      <Dialog open={open}>
        <StyledDeleteDialogCard>
          <Typography fontSize={24}>
            האם אתה בטוח שברצונך למחוק את
            <br />
            {book.title} ?
          </Typography>
          <Box display={"flex"} gap={8}>
            <Button onClick={handleClickCancel} variant="contained">
              ביטול
            </Button>
            <Button onClick={handleClickAccept} variant="contained">
              אישור
            </Button>
          </Box>
        </StyledDeleteDialogCard>
      </Dialog>
    </>
  );
}

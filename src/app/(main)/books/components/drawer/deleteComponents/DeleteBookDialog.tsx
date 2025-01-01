import { StyledMenuItem } from "@/app/(main)/common/components/styled";
import { useDeleteBook } from "@/app/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { Book } from "../../../../common/dto/book";
import { StyledDeleteDialogCard } from "../../styled";
import { FormButtons } from "@/app/(main)/common/components/FormButtons";

type DeleteBookProps = {
  book: Book;
};

export const DeleteBookDialog = ({ book }: DeleteBookProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
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
          <FormButtons handleClose={handleClose} onSubmit={handleClickAccept} />
        </StyledDeleteDialogCard>
      </Dialog>
    </>
  );
};

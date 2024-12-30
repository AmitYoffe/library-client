import { useReturnBook } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormButtons } from "../../common/components/FormButtons";
import { Book } from "../../common/dto/book";
import {
  StyledBorrowDialogCard,
  StyledDeleteIconButton,
  StyledTypography,
} from "./styled";

type TerminateBorrowDialogProps = {
  user: User;
  book: Book;
};

export const TerminateBorrowDialog = ({
  book,
  user,
}: TerminateBorrowDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit } = useForm<{ bookId: number }>();

  const updateBorrowMutation = useReturnBook();

  const onSubmit = () => {
    updateBorrowMutation.mutate(book.id, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <>
      <StyledDeleteIconButton onClick={handleOpen}>
        <DeleteOutlineIcon />
      </StyledDeleteIconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <StyledBorrowDialogCard>
          <Typography fontSize={28}>סיום השאלה</Typography>
          <Box>
            <Typography>האם אתה בטוח שאתה רוצה לסיים השאלה לספר -</Typography>
            <StyledTypography>"{book.title}"</StyledTypography>
            <br />
            <Typography> עבור המשתמש: </Typography>
            <StyledTypography>{user.username}</StyledTypography>
          </Box>
          <FormButtons handleClose={handleClose} />
        </StyledBorrowDialogCard>
      </Dialog>
    </>
  );
};

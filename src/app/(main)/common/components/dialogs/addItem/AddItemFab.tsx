"use client";
import { AddBookFormDialog } from "@/app/(main)/books/components/addComponents/AddBookForm";
import { AddWriterFormDialog } from "@/app/(main)/writers/components/addComponents/AddWriterForm";
import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyledFab } from "../../styled";

export const AddItemFab = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isWritersPage = pathname === "/writers";
  // make this more generic not binary, or just split the Fab
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledFab onClick={handleClickOpen}>
        <AddIcon />
      </StyledFab>
      {isWritersPage ? (
        <AddWriterFormDialog handleClose={handleClose} open={open} />
      ) : (
        <AddBookFormDialog handleClose={handleClose} open={open} />
      )}
    </>
  );
};

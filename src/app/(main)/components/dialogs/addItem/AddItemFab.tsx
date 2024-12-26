"use client";
import { useAddBook, useAddWriter } from "@/app/api";
import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyledFab } from "../../styled";
import { AddItemFormDialog } from "./AddItemForm";
import { FormFields as BookFormFields } from "@/app/(main)/books/components/FormFields";
import { FormFields as WriterFormFields } from "@/app/(main)/writers/components/FormFields";

export const AddItemFab = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isWritersPage = pathname === "/writers";

  const addWriterMutation = useAddWriter();
  const addBookMutation = useAddBook();

  const currentMutation = isWritersPage ? addWriterMutation : addBookMutation;
  const formFields = isWritersPage ? <WriterFormFields /> : <BookFormFields />;
  const title = isWritersPage ? "סופר" : "ספר";

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
      <AddItemFormDialog
        handleClose={handleClose}
        open={open}
        currentMutation={currentMutation}
        fields={formFields}
        title={title}
      />
    </>
  );
};

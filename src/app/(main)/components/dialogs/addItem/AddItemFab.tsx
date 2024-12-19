"use client";
import AddIcon from "@mui/icons-material/Add";
import { TransitionProps } from "@mui/material/transitions";
import { useState } from "react";
import { StyledFab } from "../../styled";
import { AddItemFormDialog } from "./AddItemForm";

// need to apply this!
// const Transition = forwardRef(function Transition(
//   props: TransitionProps & {
//     children: ReactElement<any, any>;
//   },
//   ref: Ref<unknown>
// ) {
//   return <Slide direction="right" ref={ref} {...props} />;
// });

export function AddItemFab() {
  const [open, setOpen] = useState(false);

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
      <AddItemFormDialog handleClose={handleClose} open={open} />
    </>
  );
}

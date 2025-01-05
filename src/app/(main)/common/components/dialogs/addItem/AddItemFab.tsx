"use client";
import AddIcon from "@mui/icons-material/Add";
import { JSX } from "react";
import { StyledFab } from "../../styled";

type AddItemFabProps = {
  addDialog: JSX.Element;
  handleOpen: () => void;
};

export const AddItemFab = ({ addDialog, handleOpen }: AddItemFabProps) => {
  return (
    <>
      <StyledFab onClick={handleOpen}>
        <AddIcon />
      </StyledFab>
      {addDialog}
    </>
  );
};

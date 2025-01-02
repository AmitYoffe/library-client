"use client";
import AddIcon from "@mui/icons-material/Add";
import { JSX, SetStateAction, useState } from "react";
import { StyledFab } from "../../styled";

type AddItemFabProps = {
  addDialog: JSX.Element;
  handleOpen: (value: SetStateAction<boolean>) => void;
};

export const AddItemFab = ({ addDialog, handleOpen }: AddItemFabProps) => {

  // clicking the fab doesn open it... :(
  return (
    <>
      <StyledFab onClick={() => handleOpen}>
        <AddIcon />
      </StyledFab>
      {addDialog}
    </>
  );
};

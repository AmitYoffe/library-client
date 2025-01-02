"use client";
import { useGetAllWriters } from "@/app/api/writers/writerMethods";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AddItemFab } from "../common/components/dialogs/addItem/AddItemFab";
import { Writer } from "../common/dto/writer";
import { AddWriterFormDialog } from "./components/addComponents/AddWriterForm";
import { WritersGrid } from "./components/WritersGrid";

const WritersPage = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const { data, isLoading, error } = useGetAllWriters();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setWriters(data.data);
    }
  }, [data]);

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching writers</Box>;

  return (
    <>
      <WritersGrid writers={writers} title={"סופרים"} />;
      <AddItemFab
        handleOpen={handleOpen}
        addDialog={
          <AddWriterFormDialog handleClose={handleClose} open={open} />
        }
      />
    </>
  );
};

export default WritersPage;

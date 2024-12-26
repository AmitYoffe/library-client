"use client";
import { useGetAllWriters } from "@/app/api/writers/writerMethods";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { WritersGrid } from "./components/WritersGrid";
import { Writer } from "./dtos/writer";

const WritersPage = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const { data, isLoading, error } = useGetAllWriters();

  useEffect(() => {
    if (data) {
      setWriters(data.data);
    }
  }, [data]);

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error fetching writers</Box>;

  return <WritersGrid writers={writers} title={"סופרים"} />;
};

export default WritersPage;

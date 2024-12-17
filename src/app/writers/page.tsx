"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { getAll } from "../api/writers/writerMethods";
import { WriterItem } from "./components/WriterItem";
import { Writer } from "./dtos/writer";

const WritersPage = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const { data, isLoading, error } = getAll();

  useEffect(() => {
    if (data) {
      setWriters(data.data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching writers</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          paddingTop: "90px",
          paddingRight: "120px",
          gap: 3,
        }}
      >
        {writers.map((writer, index) => (
          <Grid key={index}>
            <WriterItem writer={writer} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WritersPage;

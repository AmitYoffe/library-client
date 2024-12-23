"use client";
import { getAllWriters } from "@/app/api/writers/writerMethods";
import { useEffect, useState } from "react";
import { WritersGrid } from "./components/WritersGrid";
import { Writer } from "./dtos/writer";

const WritersPage = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const { data, isLoading, error } = getAllWriters();

  useEffect(() => {
    if (data) {
      setWriters(data.data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching writers</div>;

  return <WritersGrid writers={writers} title={"סופרים"} />;
};

export default WritersPage;

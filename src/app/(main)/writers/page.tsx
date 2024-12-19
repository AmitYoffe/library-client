"use client";
import { getAll } from "@/app/api/writers/writerMethods";
import { useEffect, useState } from "react";
import { GridContainer } from "../components/GridContainer";
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

  return <GridContainer data={writers} title={"סופרים"} />;
};

export default WritersPage;

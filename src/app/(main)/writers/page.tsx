"use client";
import { getAll } from "@/app/api/writers/writerMethods";
import { useEffect, useState } from "react";
import DataGrid from "../components/GridContainer";
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

  return <DataGrid data={writers} />;
};
// todo: copy this page into Books, make sure i get books the same way

export default WritersPage;

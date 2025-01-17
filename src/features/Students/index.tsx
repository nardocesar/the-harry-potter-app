"use client";
import { useStudents } from "@/services/characters";
import { Students as StudentsComponent } from "./Students";

export const Students = () => {
  const { data, isLoading } = useStudents();
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  return <StudentsComponent students={data} />;
};

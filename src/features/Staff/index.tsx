"use client";
import { useStaff } from "@/services/characters";
import { Staff as StaffComponent } from "./Staff";

export const Staff = () => {
  const { data, isLoading } = useStaff();
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  return <StaffComponent staff={data} />;
};

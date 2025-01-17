"use client";
import { useCharacters } from "@/services/characters";
import { Characters as CharactersComponent } from "./Characters";

export const Characters = () => {
  const { data, isLoading } = useCharacters();
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  return <CharactersComponent characters={data} />;
};

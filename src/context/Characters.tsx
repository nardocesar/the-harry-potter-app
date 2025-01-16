"use client";

import { Character, House } from "@/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const houses: House[] = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

type CharactersContextType = {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  prefferedHouse: House;
  setPrefferedHouse: React.Dispatch<React.SetStateAction<House>>;
  houses: House[];
  favoriteCharacter: Character | null;
  setFavoriteCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
};

export const CharactersContext = createContext<
  CharactersContextType | undefined
>(undefined);

export const CharactersProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [prefferedHouse, setPrefferedHouse] = useState<House>("Gryffindor");
  const [favoriteCharacter, setFavoriteCharacter] = useState<Character | null>(
    null
  );

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        prefferedHouse,
        setPrefferedHouse,
        houses,
        favoriteCharacter,
        setFavoriteCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error(
      "useCharactersContext must be used within a CharactersProvider"
    );
  }
  return context;
};

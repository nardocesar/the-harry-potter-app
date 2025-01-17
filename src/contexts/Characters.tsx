"use client";

import { getLocalStorage, setLocalStorage } from "@/services/localStorage";
import { Character, House } from "@/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const houses: House[] = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

type CharactersContextType = {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  prefferedHouse: House;
  setPrefferedHouse: (house: House) => void;
  houses: House[];
  favoriteCharacter: string | null;
  setFavoriteCharacter: (character: string | null) => void;
};

export const CharactersContext = createContext<
  CharactersContextType | undefined
>(undefined);

const storedPrefferedHouse = getLocalStorage("prefferedHouse");
const storedFavoriteCharacter = getLocalStorage("favoriteCharacter");

if (!storedPrefferedHouse) {
  setLocalStorage("prefferedHouse", "Gryffindor");
}

export const CharactersProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [prefferedHouse, setPrefferedHouse] = useState<House>(
    storedPrefferedHouse as House
  );
  const [favoriteCharacter, setFavoriteCharacter] = useState<string | null>(
    storedFavoriteCharacter ?? null
  );

  const handleSetPrefferedHouse = (house: House) => {
    setPrefferedHouse(house);
    setLocalStorage("prefferedHouse", house);
  };

  const handleSetFavoriteCharacter = (character: string | null) => {
    setFavoriteCharacter(character);
    setLocalStorage("favoriteCharacter", character ?? "");
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        prefferedHouse,
        setPrefferedHouse: handleSetPrefferedHouse,
        houses,
        favoriteCharacter,
        setFavoriteCharacter: handleSetFavoriteCharacter,
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

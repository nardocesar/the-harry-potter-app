"use client";

import { getLocalStorage, setLocalStorage } from "@/services/localStorage";
import { Character, House } from "@/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

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

export const CharactersProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [prefferedHouse, setPrefferedHouse] = useState<House>("Gryffindor");
  const [favoriteCharacter, setFavoriteCharacter] = useState<string | null>(
    null
  );

  useEffect(() => {
    const storedHouse = getLocalStorage("prefferedHouse") as House;
    const storedFavoriteCharacter = getLocalStorage("favoriteCharacter");

    if (storedHouse) {
      setPrefferedHouse(storedHouse);
    }
    if (storedFavoriteCharacter) {
      setFavoriteCharacter(storedFavoriteCharacter);
    }
  }, []);

  useEffect(() => {
    setLocalStorage("prefferedHouse", prefferedHouse);
  }, [prefferedHouse]);

  const handleSetPrefferedHouse = (house: House) => {
    setPrefferedHouse(house);
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

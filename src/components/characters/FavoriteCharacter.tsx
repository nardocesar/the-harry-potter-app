"use client";

import { useCharactersContext } from "@/contexts/Characters";
import { findCharacterById, useCharacters } from "@/services/characters";
import { Avatar } from "../common/Avatar";
import { extractInitials } from "@/utils";
import { houseBgColors, houseTextColors } from "@/const/colors";
import { twMerge } from "tailwind-merge";

export const FavoriteCharacter = () => {
  const { favoriteCharacter, prefferedHouse } = useCharactersContext();

  const { data } = useCharacters();

  const houseBgClass = houseBgColors[prefferedHouse];
  const houseTextClass = houseTextColors[prefferedHouse];

  if (!data) return null;
  if (!favoriteCharacter) return null;

  const favoriteCharacterData = findCharacterById(data, favoriteCharacter);

  if (!favoriteCharacterData) return null;

  return (
    <div
      className={twMerge(
        "flex flex-col w-full border border-gray-300 rounded-lg p-4 gap-4",
        houseBgClass,
        houseTextClass
      )}
    >
      <h1 className="text-2xl font-bold">My favorite character is:</h1>
      <div className="flex items-center gap-2">
        <Avatar
          src={favoriteCharacterData.image}
          fallback={extractInitials(favoriteCharacterData.name)}
        />
        <p>{favoriteCharacterData.name}</p>
      </div>
    </div>
  );
};

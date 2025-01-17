"use client";

import { FavoriteCharacter } from "@/components/characters/FavoriteCharacter";
import { Menu } from "./Menu";
import { useCharactersContext } from "@/contexts/Characters";

export const Sidebar = () => {
  const { favoriteCharacter } = useCharactersContext();

  return (
    <aside className="flex flex-col w-full lg:w-1/4 bg-gray-200">
      <nav>
        {favoriteCharacter && (
          <div className="p-4">
            <FavoriteCharacter />
          </div>
        )}
        <Menu />
      </nav>
    </aside>
  );
};

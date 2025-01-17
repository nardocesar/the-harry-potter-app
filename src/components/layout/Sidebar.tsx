"use client";

import { FavoriteCharacter } from "@/components/characters/FavoriteCharacter";
import { Menu } from "./Menu";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-full lg:w-1/4 bg-gray-200">
      <nav>
        <div className="p-4">
          <FavoriteCharacter />
        </div>
        <Menu />
      </nav>
    </aside>
  );
};

"use client";

import Link from "next/link";
import { FavoriteCharacter } from "@/components/characters/FavoriteCharacter";
import { menu } from "@/const/menu";
import { useCharactersContext } from "@/context/Characters";
import { twMerge } from "tailwind-merge";
import { houseTextColors } from "@/const/colors";

export const Sidebar = () => {
  const { prefferedHouse } = useCharactersContext();

  return (
    <aside className="flex flex-col grow w-1/4 bg-gray-200">
      <nav>
        <FavoriteCharacter />
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                className={twMerge(
                  "flex p-2 hover:bg-gray-300 cursor-pointer transition-colors duration-300",
                  houseTextColors[prefferedHouse]
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

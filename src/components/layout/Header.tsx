"use client";

import { HouseSelector } from "@/components/common/HouseSelector";
import { useCharactersContext } from "@/contexts/Characters";
import { twMerge } from "tailwind-merge";
import { houseBgColors, houseTextColors } from "@/const/colors";

export const Header = () => {
  const { prefferedHouse } = useCharactersContext();

  const houseColor = houseBgColors[prefferedHouse];
  const houseTextColor = houseTextColors[prefferedHouse];

  return (
    <header
      className={twMerge(
        "p-4 items-center flex flex-col lg:flex-row justify-between gap-4",
        houseColor,
        houseTextColor
      )}
    >
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-6xl">The Harry Potter App</h1>
        <p>
          You belong to the <span className="font-bold">{prefferedHouse}</span>{" "}
          house
        </p>
      </div>
      <HouseSelector />
    </header>
  );
};

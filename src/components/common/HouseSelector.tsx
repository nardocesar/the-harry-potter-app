"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCharactersContext } from "@/context/Characters";
import { House } from "@/types";

export const HouseSelector = () => {
  const { prefferedHouse, setPrefferedHouse, houses } = useCharactersContext();

  return (
    <Select
      value={prefferedHouse}
      onValueChange={(value: House) => setPrefferedHouse(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={prefferedHouse} />
      </SelectTrigger>
      <SelectContent>
        {houses.map((house) => (
          <SelectItem key={house} value={house}>
            {house}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

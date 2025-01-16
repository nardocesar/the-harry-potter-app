"use client";

import { useCharactersContext } from "@/context/Characters";
import Image from "next/image";

export const FavoriteCharacter = () => {
  const { favoriteCharacter } = useCharactersContext();

  return favoriteCharacter ? (
    <figure>
      <Image
        src={favoriteCharacter.image}
        alt={favoriteCharacter.name}
        width={150}
        height={150}
      />
      <figcaption>{favoriteCharacter.name}</figcaption>
    </figure>
  ) : null;
};

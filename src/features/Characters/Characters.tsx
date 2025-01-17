import { CharacterCard } from "@/components/characters/CharacterCard";
import { Character } from "@/types";

type CharactersProps = {
  characters: Character[];
};

export const Characters = ({ characters }: CharactersProps) => {
  return (
    <div className="p-4 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

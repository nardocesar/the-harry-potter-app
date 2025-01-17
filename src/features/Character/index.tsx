import { findCharacterById, useCharacters } from "@/services/characters";
import { CharacterDetail } from "@/features/Character/CharacterDetail";

export const Character = ({ characterId }: { characterId: string }) => {
  // Using useCharacters hook to fetch all characters because it's already cached
  // Otherwid I'd use a proper fetch by id

  const { data, isLoading } = useCharacters();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  const character = findCharacterById(data, characterId);

  if (!character) return <div>Character not found</div>;

  return <CharacterDetail character={character} />;
};

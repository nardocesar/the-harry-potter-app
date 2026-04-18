import { Button } from "@/components/ui/button";
import { useCharactersContext } from "@/contexts/Characters";

export const FavoriteButton = ({ characterId }: { characterId: string }) => {
  const { favoriteCharacter, setFavoriteCharacter } = useCharactersContext();

  const isFavorite = favoriteCharacter === characterId;

  const handleFavorite = () => {
    if (favoriteCharacter === characterId) {
      setFavoriteCharacter(null);
    } else {
      setFavoriteCharacter(characterId);
    }
  };

  return (
    <Button
      onClick={handleFavorite}
      variant={isFavorite ? "outline" : "default"}
    >
      {isFavorite ? "Remove Favorite" : "Add Favorite"}
    </Button>
  );
};

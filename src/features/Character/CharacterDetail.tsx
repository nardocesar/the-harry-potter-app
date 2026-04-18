import { FavoriteButton } from "@/components/characters/FavoriteButton";
import { Character } from "@/types";
import Image from "next/image";

type CharacterDetailProps = {
  character: Character;
};

export const CharacterDetail = ({ character }: CharacterDetailProps) => {
  return (
    <div className="flex flex-1 items-start justify-between w-full p-4 gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <FavoriteButton characterId={character.id} />
        {character.image && (
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
          />
        )}
        <h1 className="text-3xl font-bold text-center mb-4">
          {character.name}
        </h1>
      </div>
      <div className="w-full gap-4">
        <p className="text-lg font-semibold">Details:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Species:</strong> {character.species}
          </li>
          <li>
            <strong>Gender:</strong> {character.gender}
          </li>
          <li>
            <strong>House:</strong> {character.house}
          </li>
          <li>
            <strong>Date of Birth:</strong> {character.dateOfBirth || "N/A"}
          </li>
          <li>
            <strong>Year of Birth:</strong> {character.yearOfBirth || "N/A"}
          </li>
          <li>
            <strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}
          </li>
          <li>
            <strong>Ancestry:</strong> {character.ancestry || "N/A"}
          </li>
          <li>
            <strong>Eye Colour:</strong> {character.eyeColour}
          </li>
          <li>
            <strong>Hair Colour:</strong> {character.hairColour}
          </li>
          <li>
            <strong>Patronus:</strong> {character.patronus || "N/A"}
          </li>
          <li>
            <strong>Actor:</strong> {character.actor}
          </li>
          <li>
            <strong>Alive:</strong> {character.alive ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    </div>
  );
};

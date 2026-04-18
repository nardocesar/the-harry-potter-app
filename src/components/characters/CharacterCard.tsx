import { Character } from "@/types";
import { Avatar } from "@/components/common/Avatar";
import { extractInitials } from "@/utils";
import Link from "next/link";

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Link
      href={`/character/${character.id}`}
      className="flex w-full gap-2 bg-gray-50 p-4 rounded-md items-center hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
    >
      <Avatar
        src={character.image}
        fallback={extractInitials(character.name)}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">{character.name}</h2>
        <p className="text-sm text-gray-500">{character.house}</p>
      </div>
    </Link>
  );
};

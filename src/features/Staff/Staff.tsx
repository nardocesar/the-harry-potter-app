import { CharacterCard } from "@/components/characters/CharacterCard";
import { Character } from "@/types";

type StaffProps = {
  staff: Character[];
};

export const Staff = ({ staff }: StaffProps) => {
  return (
    <div className="p-4 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        {staff.map((staff) => (
          <CharacterCard key={staff.id} character={staff} />
        ))}
      </div>
    </div>
  );
};

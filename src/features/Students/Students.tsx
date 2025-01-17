import { CharacterCard } from "@/components/characters/CharacterCard";
import { Character } from "@/types";

type StudentsProps = {
  students: Character[];
};

export const Students = ({ students }: StudentsProps) => {
  return (
    <div className="p-4 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <CharacterCard key={student.id} character={student} />
        ))}
      </div>
    </div>
  );
};

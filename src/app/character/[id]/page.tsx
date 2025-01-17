"use client";

import { Character } from "@/features/Character";
import { useParams } from "next/navigation";

export default function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  return <Character characterId={id} />;
}

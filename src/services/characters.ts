import { Character } from "@/types";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "https://hp-api.onrender.com/api";

// API functions
const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/characters`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

const fetchStudents = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/characters/students`);
  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }
  return response.json();
};

const fetchStaff = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/characters/staff`);
  if (!response.ok) {
    throw new Error("Failed to fetch staff");
  }
  return response.json();
};

// React Query Hooks
export const useCharacters = () => {
  return useQuery<Character[], Error>({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });
};

export const useStudents = () => {
  return useQuery<Character[], Error>({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });
};

export const useStaff = () => {
  return useQuery<Character[], Error>({
    queryKey: ["staff"],
    queryFn: fetchStaff,
  });
};

// Helper function to get a single character by ID
export const findCharacterById = (characters: Character[], id: string) => {
  return characters.find((character) => character.id === id);
};

export type House = "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw";

export type Gender = "male" | "female";

export type Species =
  | "human"
  | "half-giant"
  | "ghost"
  | "werewolf"
  | "centaur"
  | "giant"
  | "goblin"
  | "giantess"
  | "humanoid";

export type Wand = {
  wood: string;
  core: string;
  length: number;
};

export type Character = {
  id: string;
  name: string;
  alternate_names: string[];
  species: Species;
  gender: Gender;
  house: House;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

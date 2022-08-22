import { ClassLevelInfo } from "../types";

export const cleric: ClassLevelInfo[] = [
  {
    level: 1,
    proficiency: 2,
    features: ["Spellcasting", "Divine Domain"],
    spellsSlots: [3, 2],
  },
  {
    level: 2,
    proficiency: 2,
    features: ["Channel Divinity (1/rest)", "Divine Domain feature"],
    spellsSlots: [3, 3],
  },
  {
    level: 3,
    proficiency: 2,
    features: ["Ability Score Improvement"],
    spellsSlots: [3, 4, 2],
  },
  {
    level: 4,
    proficiency: 2,
    features: ["Ability Score Improvement"],
    spellsSlots: [4, 4, 3],
  },
  {
    level: 5,
    proficiency: 3,
    features: ["Destroy Undead (CR 1/2"],
    spellsSlots: [4, 4, 3, 2],
  },
  {
    level: 6,
    proficiency: 3,
    features: ["Channel Divinity (2/rest)", "Divine Domain Feature"],
    spellsSlots: [4, 4, 3, 3],
  },
  {
    level: 7,
    proficiency: 3,
    features: [],
    spellsSlots: [4, 4, 3, 3, 1],
  },
  {
    level: 8,
    proficiency: 3,
    features: [
      "Ability Score Improvement",
      "Destroy Undead (CR 1)",
      "Divine Domain feature",
    ],
    spellsSlots: [4, 4, 3, 3, 2],
  },
  {
    level: 9,
    proficiency: 4,
    features: [],
    spellsSlots: [4, 4, 3, 3, 3, 1],
  },
  {
    level: 10,
    proficiency: 4,
    features: ["Divine Intervention"],
    spellsSlots: [5, 4, 3, 3, 3, 2],
  },
];
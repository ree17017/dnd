const SkillsEnum: any = {
  str: {
    athletics: "Athletics",
  },
  dex: {
    acrobatics: "Acrobatics",
    slight_of_hand: "Slight of Hand",
    stealth: "Stealth",
  },
  int: {
    arcana: "Arcana",
    history: "History",
    investigation: "Investigation",
    nature: "Nature",
    religion: "Religion",
  },
  wis: {
    animal_handling: "Animal Handling",
    insight: "Insight",
    medicine: "Medicine",
    perception: "Perception",
    survival: "Survival",
  },
  cha: {
    deception: "Deception",
    intimidation: "Intimidation",
    performance: "Performance",
    persuasion: "Persuasion",
  },
};

const StatsEnum = [
  { name: "Strength", key: "str" },
  { name: "Dexterity", key: "dex" },
  { name: "Constitution", key: "con" },
  { name: "Intelligence", key: "int" },
  { name: "Wisdom", key: "wis" },
  { name: "Charisma", key: "cha" },
];

export { SkillsEnum, StatsEnum };

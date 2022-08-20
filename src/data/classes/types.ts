export type ClassIdentifier = 'cleric';
export type CharacterLevel = 1 | 2 |3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type ProficiencyScale = 2 | 3 | 4;
type SpellsSlotScale = 1 | 2 | 3 | 4 | 5;

export interface ClassLevelInfo {
  level: CharacterLevel;
  proficiency: ProficiencyScale;
  spellsSlots: SpellsSlotScale[];
  features: string[];
}

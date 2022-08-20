type Proficiency = 2 | 3 | 4;
type SpellsSlotPossibility = 1 | 2 | 3 | 4 | 5;

export type CharacterLevel = 1 | 2 |3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type ClassIdentifier = 'cleric';

export type LevelMap = Map<CharacterLevel, ClassLevelInfo>;

export interface ClassLevelInfo {
  level: CharacterLevel;
  proficiency: Proficiency;
  features: string[];
  spellsSlots: SpellsSlotPossibility[];
}

export interface ClassInfo {
  name: string;
  levelInfo: LevelMap;
}

export type AllClasses = Map<ClassIdentifier, ClassInfo>;

export type ClassMapInput = [ClassIdentifier, ClassInfo];

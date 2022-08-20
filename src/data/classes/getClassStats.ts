import { allClasses } from "./allClasses";
import { CharacterLevel, ClassIdentifier, ClassLevelInfo } from "./types";

export default function getClassStats(classType: ClassIdentifier, level: CharacterLevel): ClassLevelInfo {
  const characterClass = allClasses.get(classType);
  if (characterClass === undefined) throw Error(`Class '${classType}' not found.`);
  
  const levelInfo = characterClass.levelInfo.get(level);
  if (levelInfo === undefined) throw Error(`Level '${level}' for class '${classType}' not found.`);

  return levelInfo;
}

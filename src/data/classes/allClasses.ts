import { cleric } from "./classes/cleric";
import { AllClasses, ClassIdentifier, ClassLevelInfo, ClassMapInput, LevelMap } from "./types";

const classInfo = (name: ClassIdentifier, levelInfo: ClassLevelInfo[]): ClassMapInput => {
  let map: LevelMap = new Map();

  levelInfo.forEach((info) => {
    map.set(info.level, info);   
  });

  return [name, {
    name: name,
    levelInfo: map,
  }]
}

export const allClasses: AllClasses = new Map([
  classInfo('cleric', cleric),
]);

import ClassData from "./ClassData";
import { cleric } from "./classes/cleric";
import { CharacterLevel, ClassIdentifier, ClassLevelInfo } from "./types";
 
type ClassTuple = [ClassIdentifier, ClassLevelInfo[]];

class AllClassData {
  private allClasses: Map<ClassIdentifier, ClassData>;
  constructor(classes: ClassTuple[]) {
    this.allClasses = new Map();

    classes.forEach((c: ClassTuple) => {
      this.addClass(c[0], c[1]);
    }); 
  }

  private addClass(name: ClassIdentifier, levelInfo: ClassLevelInfo[]) {
    this.allClasses.set(name, new ClassData(name, levelInfo));
  }

  getClass(id: ClassIdentifier): ClassData {
    const classData = this.allClasses.get(id);
    if (classData === undefined) throw Error(`Class '${id}' not found.`);
    return classData;
  }

  getClassLevelInfo(id: ClassIdentifier, level: CharacterLevel) {
    return this.getClass(id).getLevelInfo(level);
  }

}

export const allClassData = new AllClassData([
  ['cleric', cleric],
]);

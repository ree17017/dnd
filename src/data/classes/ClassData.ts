import { CharacterLevel, ClassIdentifier, ClassLevelInfo } from "./types";

export default class ClassData {
    private name: ClassIdentifier;
    private levels: Map<CharacterLevel, ClassLevelInfo>;
    constructor(name: ClassIdentifier, levels: ClassLevelInfo[]) {
        this.name = name;
        const newLevelInfoMap = new Map();
        levels.forEach((levelInfo) => {
            newLevelInfoMap.set(levelInfo.level, levelInfo);
        });
        this.levels = newLevelInfoMap;
    }

    getName() { return this.name }
    
    getLevelInfo(level: CharacterLevel): ClassLevelInfo {
        const levelInfo = this.levels.get(level);
        if (levelInfo === undefined) throw Error(`Level '${level}' for class '${this.name}' not found.`);
        return levelInfo;
    }
}
import { cleric } from "../components/classes/cleric";
export default function classStats(characterClass = "cleric", level = 1) {
  let tempClass = characterClass ? "cleric" : "cleric";
  switch (tempClass) {
    case "cleric":
      return level !== 0 || level !== "" ? cleric[level] : cleric[1];
    default:
      
  }
}

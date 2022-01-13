import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";
import classStats from "../tools/classStats";

export default function Proficiency(props) {
  const [wis] = useLocalStorage("wis", { stat: 0, otherModifier: 0 });
  const [characterClass] = useLocalStorage("class", "cleric");
  const [level] = useLocalStorage("level", 1);
  const currentClass = classStats(characterClass, 1);

  const passivePerception =
    10 +
    +modifier(wis.stat || 0) +
    +wis.otherModifier +
    currentClass.proficiency;
  return (
    <div className="proficiency">
      <div className="proficiency-font">{currentClass.proficiency}</div>
      <div style={{ padding: "8px" }}>Proficiency Bonus</div>
      <div style={{ fontSize: "18px", padding: "0 8px" }}>
        {passivePerception}
      </div>
      <div>passive wisdom (perception)</div>
    </div>
  );
}

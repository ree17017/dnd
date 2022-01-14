import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";

export default function Proficiency(props) {
  const [wis] = useLocalStorage("wis", { stat: 0, otherModifier: 0 });
  const [proficiency, setProficiency] = useLocalStorage("proficiency");

  const passivePerception =
    10 + +modifier(wis.stat || 0) + +wis.otherModifier + +proficiency;
  return (
    <div className="proficiency">
      <div className="proficiency-font">
        <input
          type="number"
          value={proficiency}
          min="0"
          step="1"
          className="input_small"
          onChange={(event) => setProficiency(Math.round(event.target.value))}
        />
      </div>
      <div style={{ padding: "8px" }}>Proficiency Bonus</div>
      <div style={{ fontSize: "18px", padding: "0 8px" }}>
        {passivePerception}
      </div>
      <div>Passive Wisdom (Perception)</div>
    </div>
  );
}

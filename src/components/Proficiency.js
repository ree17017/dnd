import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";

export default function Proficiency(props) {
  const [proficiency, setProficiency] = useLocalStorage("proficiency");
  const [wis] = useLocalStorage("wis");
  const passivePreception =
    10 + +modifier(wis.stat) + (+wis.temp | 0) + +proficiency;
  console.log(modifier(wis.stat), wis.temp, proficiency);
  console.log(passivePreception);
  return (
    <div className="proficiency">
      <input
        className="input_small"
        type="number"
        value={proficiency}
        onChange={(event) => setProficiency(event.target.value)}
      />
      <div style={{ padding: "8px" }}>Proficiency Bonus</div>
      <div style={{ fontSize: "18px", padding: "0 8px" }}>
        {passivePreception}
      </div>
      <div>Passive Wisdom (Perception)</div>
    </div>
  );
}

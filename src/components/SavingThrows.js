import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";

export default function SavingThrows(props) {
  const [str] = useLocalStorage("str");
  const [dex] = useLocalStorage("dex");
  const [con] = useLocalStorage("con");
  const [int] = useLocalStorage("int");
  const [wis] = useLocalStorage("wis");
  const [cha] = useLocalStorage("cha");
  const [proficiency] = useLocalStorage("proficiency");
  const [saves, setSaves] = useLocalStorage("saves", []);

  const index = (name) => saves.indexOf(name);

  const handleChecked = (event) => {
    if (index(event.target.name) === -1) {
      setSaves([...saves, event.target.name]);
      return;
    }

    if (index(event.target.name) > -1) {
      let thisIndex = index(event.target.name);
      let saveThis = saves.slice(thisIndex - 1, thisIndex);

      setSaves(saveThis);
    }
  };

  const add = (num1, num2) => {
    return +num1 + +num2;
  };

  const saveStat = (name, stat) => {
    console.log(name, stat);
    return isChecked(name)
      ? add(modifier(stat.stat), proficiency) + +stat.otherModifier
      : modifier(stat.stat) + +stat.otherModifier;
  };

  const isChecked = (name) => index(name) > -1;

  return (
    <div>
      <h4> Saving Throws </h4>
      <ul>
        <li className="savingthrows_flex-container">
          <div> Strength </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("str")}
            id="str"
            name="str"
            value={str.stat}
          />
          <div> {saveStat("str", str)} </div>
        </li>
        <li className="savingthrows_flex-container">
          <div> Dexterity </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("dex")}
            id="dex"
            name="dex"
            value={dex.stat}
          />
          <div> {saveStat("dex", dex)} </div>
        </li>
        <li className="savingthrows_flex-container">
          <div> Constitution </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("con")}
            id="con"
            name="con"
            value={con.stat}
          />
          <div> {saveStat("con", con)} </div>
        </li>
        <li className="savingthrows_flex-container">
          <div> Intelligence </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("int")}
            id="int"
            name="int"
            value={int.stat}
          />
          <div> {saveStat("int", int)} </div>
        </li>
        <li className="savingthrows_flex-container">
          <div> Wisdom </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("wis")}
            id="wis"
            name="wis"
            value={wis.stat}
          />
          <div> {saveStat("wis", wis)} </div>
        </li>
        <li className="savingthrows_flex-container">
          <div> Charisma </div>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("cha")}
            id="cha"
            name="cha"
            value={cha.stat}
          />
          <div> {saveStat("cha", cha)} </div>
        </li>
      </ul>
    </div>
  );
}

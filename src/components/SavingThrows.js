import React, { useEffect } from "react";
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
    console.log(num1, num2, num1 + num2);
    return +num1 + +num2;
  };

  const saveStat = (name, stat) => {
    return index(name) > -1 ? add(modifier(stat), proficiency) : modifier(stat);
  };

  const isChecked = (name) => index(name) > -1;

  return (
    <div>
      <h4> Saving Throws </h4>
      <ul>
        <li>
          <span> Strength </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("str")}
            id="str"
            name="str"
            value={str}
          />
          <span> {saveStat("str", str)} </span>
        </li>
        <li>
          <span> Dexterity </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("dex")}
            id="dex"
            name="dex"
            value={dex}
          />
          <span> {saveStat("dex", dex)} </span>
        </li>
        <li>
          <span> Constitution </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("con")}
            id="con"
            name="con"
            value={con}
          />
          <span> {saveStat("con", con)} </span>
        </li>
        <li>
          <span> Intelligence </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("int")}
            id="int"
            name="int"
            value={int}
          />
          <span> {saveStat("int", int)} </span>
        </li>
        <li>
          <span> Wisdom </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("wis")}
            id="wis"
            name="wis"
            value={wis}
          />
          <span> {saveStat("wis", wis)} </span>
        </li>
        <li>
          <span> Charisma </span>
          <input
            type="checkbox"
            onChange={(event) => handleChecked(event)}
            checked={isChecked("cha")}
            id="cha"
            name="cha"
            value={cha}
          />
          <span> {saveStat("cha", cha)} </span>
        </li>
      </ul>
    </div>
  );
}

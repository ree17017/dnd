import React from "react";
import { modifier } from "../tools/modifier";
import useLocalStorage from "react-localstorage-hook";

export default function Stats(props) {
  const [str, setStr] = useLocalStorage("str");
  const [dex, setDex] = useLocalStorage("dex");
  const [con, setCon] = useLocalStorage("con");
  const [int, setInt] = useLocalStorage("int");
  const [wis, setWis] = useLocalStorage("wis");
  const [cha, setCha] = useLocalStorage("cha");

  return (
    <>
      <ul>
        <div>Strength</div>
        <li>
          <div>{modifier(str)}</div>
          <input
            type="text"
            value={str}
            onChange={(event) => setStr(event.target.value)}
          />
        </li>
        <div>Dexterity</div>
        <li>
          <div>{modifier(dex)}</div>
          <input
            type="text"
            value={dex}
            onChange={(event) => setDex(event.target.value)}
          />
        </li>
        Constitution
        <li>
          <div>{modifier(con)}</div>
          <input
            type="text"
            value={con}
            onChange={(event) => setCon(event.target.value)}
          />
        </li>
        Intelligence
        <li>
          <div>{modifier(int)}</div>
          <input
            type="text"
            value={int}
            onChange={(event) => setInt(event.target.value)}
          />
        </li>
        Wisdom
        <li>
          <div>{modifier(wis)}</div>
          <input
            type="text"
            value={wis}
            onChange={(event) => setWis(event.target.value)}
          />
        </li>
        Charisma
        <li>
          <div>{modifier(cha)}</div>
          <input
            type="text"
            value={cha}
            onChange={(event) => setCha(event.target.value)}
          />
        </li>
      </ul>
    </>
  );
}

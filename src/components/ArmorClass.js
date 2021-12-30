import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";

export default function ArmorClass(props) {
  const [dex] = useLocalStorage("dex");

  const dexModifierTotal = +modifier(dex.stat) + +dex.otherModifier;

  return (
    <div>
      <div> 10 + {dexModifierTotal} + Wornarmor + spell bounsj</div>
      <div>Armor Class</div>
    </div>
  );
}

import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";
import { createPopper } from "@popperjs/core";

export default function ArmorClass(props) {
  const [dex] = useLocalStorage("dex");
  const [wornArmor] = useLocalStorage("wornArmor");
  const [acBonus, setAcBonus] = useLocalStorage("acBonus");

  const dexModifierTotal = +modifier(dex.stat) + +dex.otherModifier;
  console.log(wornArmor.shield_AC, wornArmor.armor_AC);
  const armor_AC = wornArmor.armor_AC >= 0 ? wornArmor.armor_AC : 0;
  const shield_AC = wornArmor.shield_AC >= 0 ? wornArmor.shield_AC : 0;
  const wornArmorTotal = +armor_AC + +shield_AC;
  console.log({ armor_AC, shield_AC });
  const total = dexModifierTotal + wornArmorTotal + +acBonus;

  return (
    <div className="armorClass">
      <div className="armorClass_AC">{total}</div>
      <hr />
      <div>
        dex: {dexModifierTotal} + armor: {wornArmorTotal} + spell bonus{" "}
        <input
          type="text"
          name="acBonus"
          id="acBonus"
          className="input_small"
          min="0"
          step="1"
          value={acBonus || 0}
          onChange={(event) => setAcBonus(event.target.value)}
        />
        =
      </div>
      <hr />
      <div>Armor Class</div>
    </div>
  );
}

import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";
import { createPopper } from "@popperjs/core";

export default function ArmorClass(props) {
  const [dex] = useLocalStorage("dex");
  const [wornArmor] = useLocalStorage("wornArmor");
  const [acBonus, setAcBonus] = useLocalStorage("acBonus");

  const tooltip = document.querySelector("#tooltip");
  const popcorn = document.querySelector("#acBonus");

  const dexModifierTotal = +modifier(dex.stat) + +dex.otherModifier;
  const wornArmorTotal = +wornArmor.armor_AC + +wornArmor.shield_AC;
  const total = 10 + dexModifierTotal + wornArmorTotal + +acBonus;

  return (
    <div className="armorClass">
      <div className="armorClass_AC">{total}</div>
      <div>
        10 + {dexModifierTotal} + {wornArmorTotal} +{" "}
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
      <div>Armor Class</div>
    </div>
  );
}

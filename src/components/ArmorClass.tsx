import React from 'react';
import { modifier } from '../tools/modifier';

interface ArmorClassProps {
  dex: any, 
  wornArmor: any, 
  acBonus: any, 
  setAcBonus: any,
}

export default function ArmorClass({ dex, wornArmor, acBonus, setAcBonus }: ArmorClassProps) {
  const dexModifierTotal = +modifier(dex.stat) + +dex.otherModifier;
  const armor_AC = wornArmor.armor_AC >= 0 ? wornArmor.armor_AC : 0;
  const shield_AC = wornArmor.shield_AC >= 0 ? wornArmor.shield_AC : 0;
  const wornArmorTotal = armor_AC > 0 ? +armor_AC + +shield_AC : 10;
  const total = dexModifierTotal + wornArmorTotal + +acBonus;

  const armorType = armor_AC ? 'armor' : 'natural';

  return (
    <div className="armorClass">
      <div className="armorClass_AC">{total}</div>
      <hr />
      <div>
        dex: {dexModifierTotal} + {armorType}: {wornArmorTotal} + spell bonus{' '}
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

import React from 'react';

interface ArmorClassProps {
  dexModifier: number;
  wornArmor: any;
  acBonus: any;
  setAcBonus: any;
}

export default function ArmorClass({
  wornArmor,
  acBonus,
  dexModifier,
  setAcBonus,
}: ArmorClassProps) {
  const armor_AC = wornArmor.armor_AC >= 0 ? wornArmor.armor_AC : 0;
  const shield_AC = wornArmor.shield_AC >= 0 ? wornArmor.shield_AC : 0;
  const wornArmorTotal =
    armor_AC > 0 ? Number(armor_AC) + Number(shield_AC) : 10;
  const total = dexModifier + wornArmorTotal + Number(acBonus);

  const armorType = armor_AC ? 'armor' : 'natural';

  return (
    <div className="armorClass">
      <div className="armorClass_AC">{total}</div>
      <hr />
      <div>
        dex: {dexModifier} + {armorType}: {wornArmorTotal} + spell bonus{' '}
        <input
          type="number"
          name="acBonus"
          id="acBonus"
          className="input_small"
          min="0"
          step="1"
          value={acBonus || 0}
          onChange={(event) => setAcBonus(event.target.value)}
        />
      </div>
      <hr />
      <div>Armor Class</div>
    </div>
  );
}

import React from 'react';

interface AttackProps {
  attackValue: any,
  attackNumber: any,
  handleAttacks: any,
  handleAttackProficiency: any,
  attackProficiency: any,
  handleAttackModifier: any,
  attackModifier: any,
  handleRemoveAction: any,
}

export default function Attack({
  attackValue,
  attackNumber,
  handleAttacks,
  handleAttackProficiency,
  attackProficiency,
  handleAttackModifier,
  attackModifier,
  handleRemoveAction,
}: AttackProps) {
  const isAttackProficiencyChecked =
    attackProficiency.indexOf(`attackProficiency${attackNumber}`) > -1;
  const isAttackModifierChecked = (name: any) =>
    attackModifier.indexOf(`modeType${attackNumber}-${name}`) > -1;


  return (
    <>
      {attackNumber !== 0 && (
        <button type="button" onClick={() => handleRemoveAction(attackNumber)}>
          Remove Action
        </button>
      )}
      <div className="attack_titles">
        <div>
          <div>
            Proficient
            <input
              type="checkbox"
              name={`attackProficiency${attackNumber}`}
              onChange={handleAttackProficiency}
              checked={isAttackProficiencyChecked}
            />
          </div>
          <div>
            Str
            <input
              type="checkbox"
              name={`modeType${attackNumber}-str`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked('str')}
              disabled={
                isAttackModifierChecked('dex') ||
                isAttackModifierChecked('spell-power')
              }
            />
          </div>
          <div>
            Dex
            <input
              type="checkbox"
              name={`modeType${attackNumber}-dex`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked('dex')}
              disabled={
                isAttackModifierChecked('str') ||
                isAttackModifierChecked('spell-power')
              }
            />
          </div>
          <div>
            Spell Power
            <input
              type="checkbox"
              name={`modeType${attackNumber}-spell-power`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked('spell-power')}
              disabled={
                isAttackModifierChecked('str') || isAttackModifierChecked('dex')
              }
            />
          </div>
        </div>
        <hr />
        Name
        <input
          type="text"
          value={attackValue[`attackName${attackNumber}`]}
          onChange={handleAttacks}
          name={`attackName${attackNumber}`}
          title={attackNumber}
        />
        Range
        <input
          type="text"
          name={`attackRange${attackNumber}`}
          value={attackValue[`attackRange${attackNumber}`]}
          onChange={handleAttacks}
          title={attackNumber}
        />
        Atk Bonus
        <input
          type="text"
          value={attackValue[`attackBonus${attackNumber}`]}
          onChange={handleAttacks}
          name={`attackBonus${attackNumber}`}
        />
        Damage
        <input
          type="text"
          value={attackValue[`damage${attackNumber}`]}
          onChange={handleAttacks}
          name={`damage${attackNumber}`}
        />
        Type / Weight
        <input
          type="text"
          value={attackValue[`type${attackNumber}`]}
          onChange={handleAttacks}
          name={`type${attackNumber}`}
        />
        Notes
        <textarea
          value={attackValue[`notes${attackNumber}`]}
          onChange={handleAttacks}
          name={`notes${attackNumber}`}
        />
      </div>
    </>
  );
}

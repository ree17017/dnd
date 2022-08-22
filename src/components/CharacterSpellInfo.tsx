import React from 'react';
interface CharacterSpellInfoProps {
  handleSpellCastingAbility: any;
  spellAbilityModifier: any;
  level: any;
  proficiency: any;
  preparedCount: any;
}

export default function CharacterSpellInfo({
  handleSpellCastingAbility,
  spellAbilityModifier,
  level,
  proficiency,
  preparedCount,
}: CharacterSpellInfoProps) {
  const totalSpellAbilityModifier =
    8 + Number(spellAbilityModifier) + proficiency;
  const spellAttackModifier = proficiency + Number(spellAbilityModifier);
  const preparedSpells = Number(spellAbilityModifier) + level;
  return (
    <div className="characterSpellInfo">
      <div>
        <input type="text" />
        <div>Spellcasting Class</div>
      </div>
      <div>
        <select
          name="spellcastingAbility"
          id="spllcastingAbility"
          onChange={handleSpellCastingAbility}
        >
          <option value="wis">Wisdom</option>
          <option value="int">Intelligence</option>
        </select>
        <div>Spellcasting Ability</div>
      </div>
      <div>
        {totalSpellAbilityModifier}
        <div>Spell Save DC</div>
        <div className="characterSpellInfo-info">
          8 + PROFICIENCY BONUS + SPELLCASTING ABILITY MODIFIER
        </div>
      </div>
      <div>
        {spellAttackModifier}
        <div>Spell Attack Modifier</div>
        <div className="characterSpellInfo-info">
          PROFICIENCY BONUS + SPELLCASTING ABILITY MODIFIER
        </div>
      </div>
      <div>
        {preparedCount.length}/{preparedSpells}
        <div>Prepared Spells</div>
        <div className="characterSpellInfo-info">
          SPELLCASTING ABILITY MODIFIER + SPELLCASTING CLASS LEVEL (1/2 ROUND
          DOWN IF PALADIN) (MINIMUM ONE SPELL)
        </div>
      </div>
    </div>
  );
}

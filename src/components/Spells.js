import React, { useState } from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";
import classStats from "../tools/classStats";

export default function Spells(props) {
  const [spellCastingAbility, setSpellCastingAbility] = useLocalStorage(
    "spellCastingAbility",
    "wis"
  );
  const [wis] = useLocalStorage("wis");
  const [int] = useLocalStorage("int");
  const [level] = useLocalStorage("level");
  const [characterClass] = useLocalStorage("class");
  const [spellList, setSpellList] = useLocalStorage("spellList");
  const [preparedCount, setPreparedCount] =
    useLocalStorage("preparedSpellCount");
  const [domainSpells, setDomainSpells] = useLocalStorage("domainSpells");

  const handleSpellList = (event) => {
    setSpellList({ ...spellList, [event.target.name]: event.target.value });
  };

  const handlePreparedDomainSpells = (event) => {
    // prepared spells list
    if (event.target.name.indexOf("prepared") !== -1) {
      if (preparedCount.indexOf(event.target.name) === -1) {
        setPreparedCount([...preparedCount, event.target.name]);
        return;
      }
    }

    if (preparedCount.indexOf(event.target.name) > -1) {
      let saveThis = preparedCount.filter(
        (preparedName) => preparedName !== event.target.name
      );
      setPreparedCount(saveThis);
    }

    // Domain spell list
    if (event.target.name.indexOf("domain") !== -1) {
      if (domainSpells.indexOf(event.target.name) === -1) {
        setDomainSpells([...domainSpells, event.target.name]);
        return;
      }
    }

    if (domainSpells.indexOf(event.target.name) > -1) {
      let saveThis = domainSpells.filter(
        (domainName) => domainName !== event.target.name
      );
      setDomainSpells(saveThis);
    }
  };

  const handleSpellCastingAbility = (event) => {
    setSpellCastingAbility(event.target.value);
  };

  const spellcastingModifier = () => {
    switch (spellCastingAbility) {
      case "wis":
        return +modifier(wis.stat) + +wis.otherModifier;
      case "int":
        return +modifier(int.stat) + +int.otherModifier;
      default:
        console.log("Error", spellCastingAbility);
    }
  };

  const spellLevels = ["Cantrip", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <CharacterSpellInfo
        handleSpellCastingAbility={handleSpellCastingAbility}
        spellAbilityModifier={spellcastingModifier()}
        classStats={classStats(characterClass, level)}
        preparedCount={preparedCount}
      />
      {spellLevels.map((level, index) => (
        <div key={`${level}-${index}`}>
          <SpellsList
            handleSpellList={handleSpellList}
            spellList={spellList}
            spellLevel={level}
            preparedCount={preparedCount}
            domainSpells={domainSpells}
            handlePreparedDomainSpells={handlePreparedDomainSpells}
          />
        </div>
      ))}
    </div>
  );
}

function CharacterSpellInfo({
  handleSpellCastingAbility,
  spellAbilityModifier,
  classStats,
  preparedCount,
}) {
  const totalSpellAbilityModifier =
    8 + +spellAbilityModifier + classStats.proficiency;
  const spellAttackModifier = classStats.proficiency + +spellAbilityModifier;
  const preparedSpells = +spellAbilityModifier + classStats.level;
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

function SpellsList({
  handleSpellList,
  preparedCount,
  spellList,
  spellLevel,
  title,
  domainSpells,
  handlePreparedDomainSpells,
}) {
  const spellCont = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      <div>
        <h1>{spellLevel}:</h1>
      </div>
      <div className="spell-level">
        {spellCont.map((count) => (
          <SpellInfo
            title={count}
            spellList={spellList}
            handleSpellList={handleSpellList}
            spellLevel={spellLevel}
            preparedCount={preparedCount}
            domainSpells={domainSpells}
            handlePreparedDomainSpells={handlePreparedDomainSpells}
          />
        ))}
      </div>
    </div>
  );
}

function SpellInfo({
  title,
  handleSpellList,
  preparedCount,
  spellList,
  spellLevel,
  domainSpells,
  handlePreparedDomainSpells,
}) {
  const isDomainChecked = (name) => domainSpells.indexOf(name) > -1;
  const isPreparedChecked = (name) => preparedCount.indexOf(name) > -1;

  return (
    <div key={`spell-${spellLevel}-${title}`} className="spell-info">
      <div></div>
      <div></div>
      <div>
        {spellLevel !== "Cantrip" && (
          <>
            <span>Domain:</span>
            <input
              type="checkbox"
              onChange={handlePreparedDomainSpells}
              name={`spell-${spellLevel}-${title}-domain`}
              checked={isDomainChecked(`spell-${spellLevel}-${title}-domain`)}
              disabled={isPreparedChecked(
                `spell-${spellLevel}-${title}-prepared`
              )}
            />
            <span>Prepared Spell:</span>
            <input
              type="checkbox"
              onChange={handlePreparedDomainSpells}
              name={`spell-${spellLevel}-${title}-prepared`}
              disabled={isDomainChecked(`spell-${spellLevel}-${title}-domain`)}
              checked={isPreparedChecked(
                `spell-${spellLevel}-${title}-prepared`
              )}
            />
          </>
        )}
        <div>
          <div>Name:</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-name`}
            value={spellList[`spell-${spellLevel}-${title}-name`]}
          />
        </div>
      </div>
      <div>
        <div>
          <div>Casting Time:</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-casting-time`}
            value={spellList[`spell-${spellLevel}-${title}-casting-time`]}
          />
        </div>

        <div>
          <div>Range</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-range`}
            value={spellList[`spell-${spellLevel}-${title}-range`]}
          />
        </div>
        <div>
          <div>Duration</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-duration`}
            value={spellList[`spell-${spellLevel}-${title}-duration`]}
          />
        </div>
        <div>
          <div>Damage type</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-damage-type`}
            value={spellList[`spell-${spellLevel}-${title}-damage-type`]}
          />
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <div>Components</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-components`}
            value={spellList[`spell-${spellLevel}-${title}-components`]}
          />
        </div>

        <div>
          <div>Save Type</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-save-type`}
            value={spellList[`spell-${spellLevel}-${title}-save-type`]}
          />
        </div>
        <div>
          <div>Dice</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-dice-number`}
            value={spellList[`spell-${spellLevel}-${title}-dice-number`]}
            className="input_small"
          />
          D
          <input
            type="text"
            className="input_small"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-dice-side`}
            value={spellList[`spell-${spellLevel}-${title}-dice-side`]}
          />
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <div>Description</div>
          <textarea
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-desc`}
            value={spellList[`spell-${spellLevel}-${title}-desc`]}
            className="spell-info_textarea"
          />
        </div>
        <div>
          <div>At Higher Levels</div>
          <textarea
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-at-higher-levels`}
            value={spellList[`spell-${spellLevel}-${title}-at-higher-levels`]}
            className="spell-info_textarea"
          />
        </div>
        <div>
          <div>Notes</div>
          <textarea
            type="text"
            className="spell-info_textarea"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-notes`}
            value={spellList[`spell-${spellLevel}-${title}-notes`]}
          />
        </div>
      </div>
    </div>
  );
}

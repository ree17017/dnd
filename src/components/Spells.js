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
  const [spellCount, setSpellCount] = useLocalStorage("spellCount", {
    0: [0],
    1: [0],
    2: [0],
    3: [0],
    4: [0],
    5: [0],
    6: [0],
    7: [0],
    8: [0],
    9: [0],
  });
  const [isSpellListHidden, setIsSpellListHidden] = useState({
    cantrip: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const handleHideSpellList = (event) => {
    console.log(event);
    console.log(event.target.id);
    setIsSpellListHidden({
      ...isSpellListHidden,
      [event.target.id]: !isSpellListHidden[event.target.id],
    });
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

  const handleAddSpell = (event) => {
    setSpellCount({
      ...spellCount,
      [event.target.title]: [
        ...spellCount[event.target.title],
        +spellCount[event.target.title][
          spellCount[event.target.title].length - 1
        ] + 1,
      ],
    });
  };

  const handleRemoveSpell = (event) => {
    console.log(event.target.title);
    console.log(event.target.id);
    console.log("spellcount[event.target.id]", spellCount[event.target.id]);
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to remove this spell?")) {
      if (spellCount[event.target.id].length > 0) {
        let saveThis = spellCount[event.target.id].filter((spell) => {
          console.log(spell, event.target.title);
          return spell !== +event.target.title;
        });
        console.log("savethis", saveThis);
        setSpellCount({
          ...spellCount,
          [event.target.id]: saveThis,
        });
      }
    }
  };

  return (
    <div>
      <CharacterSpellInfo
        handleSpellCastingAbility={handleSpellCastingAbility}
        spellAbilityModifier={spellcastingModifier()}
        classStats={classStats(characterClass, level)}
        preparedCount={preparedCount}
      />
      {Object.keys(spellCount).map((level, index) => {
        return (
          <div key={`${level}-${index}`}>
            <SpellsList
              handleSpellList={handleSpellList}
              spellList={spellList}
              spellLevel={level}
              preparedCount={preparedCount}
              domainSpells={domainSpells}
              handlePreparedDomainSpells={handlePreparedDomainSpells}
              title={index}
              handleHideSpellList={handleHideSpellList}
              isSpellListHidden={isSpellListHidden}
              spellCont={spellCount}
              handleAddSpell={handleAddSpell}
              handleRemoveSpell={handleRemoveSpell}
            />
          </div>
        );
      })}
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
  handleHideSpellList,
  isSpellListHidden,
  spellCont,
  handleAddSpell,
  handleRemoveSpell,
}) {
  return (
    <div>
      <div className="spell-level_h1">
        <h1>Spell Level: {spellLevel === "0" ? "Cantrip" : spellLevel}</h1>
      </div>
      <button onClick={(event) => handleHideSpellList(event)} id={spellLevel}>
        {isSpellListHidden[spellLevel] ? "Hide" : "Show"}
      </button>
      <button title={spellLevel} onClick={(event) => handleAddSpell(event)}>
        Add Spell
      </button>
      {isSpellListHidden[spellLevel] && (
        <div id={`${spellLevel}`} className="spell-level">
          {spellCont[spellLevel].map((count) => (
            <SpellInfo
              title={count}
              spellList={spellList}
              handleSpellList={handleSpellList}
              spellLevel={spellLevel}
              preparedCount={preparedCount}
              domainSpells={domainSpells}
              handlePreparedDomainSpells={handlePreparedDomainSpells}
              handleHideSpellList={handleHideSpellList}
              isSpellListHidden={isSpellListHidden}
              handleRemoveSpell={handleRemoveSpell}
            />
          ))}
        </div>
      )}
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
  handleRemoveSpell,
}) {
  const isDomainChecked = (name) => domainSpells.indexOf(name) > -1;
  const isPreparedChecked = (name) => preparedCount.indexOf(name) > -1;

  return (
    <div key={`spell-${spellLevel}-${title}`} className="spell-info">
      <button
        onClick={(event) => handleRemoveSpell(event)}
        title={title}
        id={spellLevel}
      >
        Remove spell
      </button>
      <div>
        {spellLevel !== "0" && (
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
            className="spell-info_input"
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
            className="spell-info_input"
          />
        </div>

        <div>
          <div>Range</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-range`}
            value={spellList[`spell-${spellLevel}-${title}-range`]}
            className="spell-info_input"
          />
        </div>
        <div>
          <div>Duration</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-duration`}
            value={spellList[`spell-${spellLevel}-${title}-duration`]}
            className="spell-info_input"
          />
        </div>
        <div>
          <div>Damage type</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-damage-type`}
            value={spellList[`spell-${spellLevel}-${title}-damage-type`]}
            className="spell-info_input"
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
            className="spell-info_input"
          />
        </div>

        <div>
          <div>Save Type</div>
          <input
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-save-type`}
            value={spellList[`spell-${spellLevel}-${title}-save-type`]}
            className="spell-info_input"
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

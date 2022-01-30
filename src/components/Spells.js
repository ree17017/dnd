import React, { useState } from 'react';
import useLocalStorage from 'react-localstorage-hook';
import { modifier } from '../tools/modifier';
import SpellsList from './SpellList';
import CharacterSpellInfo from './CharacterSpellInfo';

export default function Spells(props) {
  const [spellCastingAbility, setSpellCastingAbility] = useLocalStorage(
    'spellCastingAbility',
    'wis'
  );
  const [wis] = useLocalStorage('wis');
  const [int] = useLocalStorage('int');
  const [level] = useLocalStorage('level');
  const [spellList, setSpellList] = useLocalStorage('spellList');
  const [proficiency] = useLocalStorage('proficiency');
  const [preparedCount, setPreparedCount] =
    useLocalStorage('preparedSpellCount');
  const [domainSpells, setDomainSpells] = useLocalStorage('domainSpells');
  const handleSpellList = (event) => {
    setSpellList({ ...spellList, [event.target.name]: event.target.value });
  };
  const [spellCount, setSpellCount] = useLocalStorage('spellCount', {
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
    
    
    setIsSpellListHidden({
      ...isSpellListHidden,
      [event.target.id]: !isSpellListHidden[event.target.id],
    });
  };

  const handlePreparedDomainSpells = (event) => {
    // prepared spells list
    if (event.target.name.indexOf('prepared') !== -1) {
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
    if (event.target.name.indexOf('domain') !== -1) {
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
      case 'wis':
        return +modifier(wis.stat) + +wis.otherModifier;
      case 'int':
        return +modifier(int.stat) + +int.otherModifier;
      default:
        
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
    
    
    
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to remove this spell?')) {
      if (spellCount[event.target.id].length > 0) {
        let saveThis = spellCount[event.target.id].filter((spell) => {
          
          return spell !== +event.target.title;
        });
        
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
        preparedCount={preparedCount}
        level={level}
        proficiency={proficiency}
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

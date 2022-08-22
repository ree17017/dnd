import React from 'react';
import SpellInfo from './SpellInfo';

interface SpellListProps {
  title: any;
  handleSpellList: any;
  preparedCount: any;
  spellList: any;
  spellLevel: any;
  domainSpells: any;
  handlePreparedDomainSpells: any;
  handleHideSpellList: any;
  isSpellListHidden: any;
  spellCont: any;
  handleAddSpell: any;
  handleRemoveSpell: any;
}

export default function SpellsList({
  handleSpellList,
  preparedCount,
  spellList,
  spellLevel,
  domainSpells,
  handlePreparedDomainSpells,
  handleHideSpellList,
  isSpellListHidden,
  spellCont,
  handleAddSpell,
  handleRemoveSpell,
}: SpellListProps) {
  return (
    <div>
      <div className="spell-level_h1">
        <h1>Spell Level: {spellLevel === '0' ? 'Cantrip' : spellLevel}</h1>
      </div>
      <button type="button" onClick={(event) => handleHideSpellList(event)} id={spellLevel}>
        {isSpellListHidden[spellLevel] ? 'Hide' : 'Show'}
      </button>
      <button type="button" title={spellLevel} onClick={(event) => handleAddSpell(event)}>
        Add Spell
      </button>
      {isSpellListHidden[spellLevel] && (
        <div id={`${spellLevel}`} className="spell-level">
          {spellCont[spellLevel].map((count: any) => (
            <SpellInfo
              key={count}
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

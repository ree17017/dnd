import React from 'react';
import SpellInfo from './SpellInfo';

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
}) {
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
          {spellCont[spellLevel].map((count) => (
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

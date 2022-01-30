import React from 'react';

export default function SpellInfo({
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
        {spellLevel !== '0' && (
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
          <div>Advanced Components</div>
          <textarea
            type="text"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-advanced-components`}
            value={
              spellList[`spell-${spellLevel}-${title}-advanced-components`]
            }
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
          />{' '}
          d{' '}
          <input
            type="text"
            className="input_small"
            onChange={handleSpellList}
            name={`spell-${spellLevel}-${title}-dice-side`}
            value={spellList[`spell-${spellLevel}-${title}-dice-side`]}
          />
        </div>
      </div>
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

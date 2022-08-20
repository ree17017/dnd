import React from 'react';

export default function Stat({
  name,
  lockStats,
  modifier,
  stat,
  handleStatChange,
  handleOtherModifierChange,
  otherModifier,
}) {
  const statChange = (event) => handleStatChange(event);
  const otherModifierChange = (event) => handleOtherModifierChange(event);
  return (
    <li key={name} className="stats_padding">
      <div>{name} </div>
      <div className="big-font" aria-label={name}>
        {modifier}
      </div>
      <div className="stats_input-border">
        <input
          type="number"
          name={name}
          value={stat}
          min="0"
          step="1"
          className="input_small"
          onChange={(event) => statChange(event)}
          readOnly={lockStats}
        />
        <div> Other Modifier</div>
        <input
          type="number"
          name={name}
          min="0"
          step="1"
          value={otherModifier}
          className="input_small"
          onChange={(event) => otherModifierChange(event)}
        />
      </div>
    </li>
  );
}

import React from 'react';

interface StatProps {
  name: any;
  lockStats: any;
  modifier: any;
  stat: any;
  handleStatChange: any;
  handleOtherModifierChange: any;
  otherModifier: any;
}

export default function Stat({
  name,
  lockStats,
  modifier,
  stat,
  handleStatChange,
  handleOtherModifierChange,
  otherModifier,
}: StatProps) {
  const statChange = (event: any) => handleStatChange(event);
  const otherModifierChange = (event: any) => handleOtherModifierChange(event);
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

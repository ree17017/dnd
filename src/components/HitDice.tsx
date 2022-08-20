import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export default function HitDice() {
  const [hitDice, setHitDice] = useLocalStorage('hitDice', {
    count: 0,
    dice: 'd0',
  });
  const handleHitDice = (event) => {
    setHitDice({ ...hitDice, [event.target.name]: event.target.value });
  };
  return (
    <div className="hitDice">
      <div>Hit Dice</div>
      <div>
        <input
          type="text"
          name="count"
          value={hitDice.count}
          className="input_small"
          onChange={handleHitDice}
        />
        <hr />
        <input
          type="text"
          name="dice"
          value={hitDice.dice}
          onChange={handleHitDice}
          className="input_small"
        />
      </div>
      <div>Current / Total</div>
    </div>
  );
}

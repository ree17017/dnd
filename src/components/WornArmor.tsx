import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export default function WornArmor() {
  const [wornArmor, setWornArmor] = useLocalStorage('wornArmor', {});

  const handleWornArmor = (event) => {
    const value = event.target.value;
    setWornArmor({ ...wornArmor, [event.target.name]: value });
  };
  return (
    <div>
      <div className="armor">
        <div>Armor</div>
        <input
          type="text"
          value={wornArmor.armor_name}
          onChange={handleWornArmor}
          name="armor_name"
        />
        <div>AC</div>
        <input
          type="text"
          onChange={handleWornArmor}
          value={wornArmor.armor_AC}
          name="armor_AC"
          className="input_small"
        />
        <div>Weight</div>
        <input
          type="number"
          value={wornArmor.armor_weight}
          name="armor_weight"
          onChange={handleWornArmor}
          className="input_small"
        />
      </div>
      <div className="shield">
        <div>Shield</div>
        <input
          type="text"
          name="shield_name"
          value={wornArmor.shield_name}
          onChange={handleWornArmor}
        />
        <div>AC</div>
        <input
          type="text"
          name="shield_AC"
          value={wornArmor.shield_AC}
          onChange={handleWornArmor}
          className="input_small"
        />
        <div>Weight</div>
        <input
          type="number"
          name="shield_weight"
          value={wornArmor.shield_weight}
          onChange={handleWornArmor}
          className="input_small"
        />
      </div>
    </div>
  );
}

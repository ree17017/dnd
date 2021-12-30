import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function WornArmor(props) {
  const [wornArmor, setWornArmor] = useLocalStorage("wornArmor", {});

  const handleWornArmor = (event) => {
    const value = event.target.value;
    setWornArmor({ ...wornArmor, [event.target.name]: value });
  };
  return (
    <div>
      <div>
        <div>Armor</div>
        <input
          type="text"
          value={wornArmor.armor_name}
          onChange={handleWornArmor}
          name="armor_name"
        />
        <input
          type="text"
          onChange={handleWornArmor}
          value={wornArmor.armor_AC}
          name="armor_AC"
        />
        <input
          type="number"
          value={wornArmor.armor_weight}
          name="armor_weight"
          onChange={handleWornArmor}
        />
      </div>
      <div>
        <div>Shield</div>
        <input
          type="text"
          name="shield_name"
          value={wornArmor.shield_name}
          onChange={handleWornArmor}
        />
        <input
          type="text"
          name="shield_AC"
          value={wornArmor.shield_AC}
          onChange={handleWornArmor}
        />
        <input
          type="number"
          name="shield_weight"
          value={wornArmor.shield_weight}
          onChange={handleWornArmor}
        />
      </div>
    </div>
  );
}

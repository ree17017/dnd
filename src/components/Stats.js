import React from "react";
import { modifier } from "../tools/modifier";
import useLocalStorage from "react-localstorage-hook";

export default function Stats(props) {
  const [str, setStr] = useLocalStorage("str", { stat: 0, otherModifier: 0 });
  const [dex, setDex] = useLocalStorage("dex", { stat: 0, otherModifier: 0 });
  const [con, setCon] = useLocalStorage("con", { stat: 0, otherModifier: 0 });
  const [int, setInt] = useLocalStorage("int", { stat: 0, otherModifier: 0 });
  const [wis, setWis] = useLocalStorage("wis", { stat: 0, otherModifier: 0 });
  const [cha, setCha] = useLocalStorage("cha", { stat: 0, otherModifier: 0 });

  const handleStatChange = (event) => {
    console.log("StatChange", event);
    switch (event.target.name) {
      case "Strength":
        setStr({ ...str, stat: event.target.value });
        break;
      case "Dexterity":
        setDex({ ...dex, stat: event.target.value });
        break;
      case "Constitution":
        setCon({ ...con, stat: event.target.value });
        break;
      case "Intelligence":
        setInt({ ...int, stat: event.target.value });
        break;
      case "Wisdom":
        setWis({ ...wis, stat: event.target.value });
        break;
      case "Charisma":
        setCha({ ...cha, stat: event.target.value });
        break;
      default:
        console.error("Something went wrong", event);
    }
  };
  const handleOtherModifierChange = (event) => {
    console.log("otherModifierChange", event);
    switch (event.target.name) {
      case "Strength":
        setStr({ ...str, otherModifier: event.target.value });
        break;
      case "Dexterity":
        setDex({ ...dex, otherModifier: event.target.value });
        break;
      case "Constitution":
        setCon({ ...con, otherModifier: event.target.value });
        break;
      case "Intelligence":
        setInt({ ...int, otherModifier: event.target.value });
        break;
      case "Wisdom":
        setWis({ ...wis, otherModifier: event.target.value });
        break;
      case "Charisma":
        setCha({ ...cha, otherModifier: event.target.value });
        break;
      default:
        console.error("Something went wrong", event);
    }
  };

  return (
    <ul>
      <Stat
        name={"Strength"}
        modifier={+modifier(str.stat) + +str.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={str.stat}
        otherModifier={str.otherModifier}
      />
      <Stat
        name={"Dexterity"}
        modifier={+modifier(dex.stat) + +dex.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={dex.stat}
        otherModifier={dex.otherModifier}
      />
      <Stat
        name={"Constitution"}
        modifier={+modifier(con.stat) + +con.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={con.stat}
        otherModifier={con.otherModifier}
      />
      <Stat
        name={"Intelligence"}
        modifier={+modifier(int.stat) + +int.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={int.stat}
        otherModifier={int.otherModifier}
      />
      <Stat
        name={"Wisdom"}
        modifier={+modifier(wis.stat) + +wis.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={wis.stat}
        otherModifier={wis.otherModifier}
      />
      <Stat
        name={"Charisma"}
        modifier={+modifier(cha.stat) + +cha.otherModifier}
        handleStatChange={handleStatChange}
        handleOtherModifierChange={handleOtherModifierChange}
        stat={cha.stat}
        otherModifier={cha.otherModifier}
      />
    </ul>
  );
}

function Stat({
  name,
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
      <div>{name}: </div>
      <div className="big-font">= {modifier}</div>
      <input
        type="number"
        name={name}
        value={stat}
        className="input_small"
        onChange={(event) => statChange(event)}
      />
      <div> Other Modifier</div>
      <input
        type="number"
        name={name}
        value={otherModifier}
        className="input_small"
        onChange={(event) => otherModifierChange(event)}
      />
    </li>
  );
}

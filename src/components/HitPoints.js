import React from "react";
import useLocalStorage from "react-localstorage-hook";
import TemporaryHitPoints from "./TemporaryHitPoints";

export default function HitPoints(props) {
  const [hitPoints, setHitPoints] = useLocalStorage("hitpoints", {
    hp: 0,
    max: 0,
    temp: 0,
  });

  const handleHitPoints = (event) => {
    setHitPoints({ ...hitPoints, [event.target.name]: event.target.value });
  };

  const handleHitPointChange = (event) => {
    event.target.name === "plus"
      ? setHitPoints({ ...hitPoints, hp: hitPoints.hp + 1 })
      : setHitPoints({ ...hitPoints, hp: hitPoints.hp - 1 });
  };

  const totalHitPoints = +hitPoints.hp + (+hitPoints.temp | 0);

  return (
    <div className="hitpoints">
      <div>HP</div>
      <div>
        {hitPoints.hp} + {hitPoints.temp} =
      </div>
      <button onClick={handleHitPointChange} name="minus">
        -
      </button>
      <input
        type="number"
        name="hp"
        className="input_small"
        onChange={handleHitPoints}
        value={totalHitPoints}
        step={1}
      />
      <button onClick={handleHitPointChange} name="plus">
        +
      </button>
      <hr />
      <input
        type="number"
        name="max"
        className="input_small"
        onChange={handleHitPoints}
        value={hitPoints.max}
      />
      <div>Maximum</div>
      <hr />
      <TemporaryHitPoints />
    </div>
  );
}

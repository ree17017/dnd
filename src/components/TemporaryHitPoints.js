import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function TemporaryHitPoints(props) {
  const [hitPoints, setHitPoints] = useLocalStorage("hitpoints");
  return (
    <div className="temporaryHitPoints">
      <input
        type="number"
        value={hitPoints.temp}
        className="input_small"
        name="temp"
        onChange={(event) =>
          setHitPoints({
            ...hitPoints,
            [event.target.name]: event.target.value,
          })
        }
      />
      <div>Temporary Hit Points</div>
    </div>
  );
}

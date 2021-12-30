import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function HitPoints(props) {
  const [hitPoints, setHitPoints] = useLocalStorage("hitpoints", 0);
  const [temporaryHitPoints] = useLocalStorage("temporaryHitPoints");

  return (
    <div>
      <input
        type="number"
        onchange={(event) => setHitPoints(event.target.value)}
        value={hitPoints + temporaryHitPoints}
      />
    </div>
  );
}

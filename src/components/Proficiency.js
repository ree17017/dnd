import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Proficiency(props) {
  const [proficiency, setProficiency] = useLocalStorage("proficiency");
  return (
    <div className="proficiency">
      <input
        className="input_small"
        type="number"
        value={proficiency}
        onChange={(event) => setProficiency(event.target.value)}
      />
      <div>Proficiency Bonus</div>
    </div>
  );
}

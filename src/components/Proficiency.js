import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Proficiency(props) {
  const [proficiency, setProficiency] = useLocalStorage("proficiency");
  return (
    <>
      <div>Proficiency Bonus</div>
      <input
        type="number"
        value={proficiency}
        onChange={(event) => setProficiency(event.target.value)}
      />
    </>
  );
}

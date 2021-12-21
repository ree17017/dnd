import React from "react";

export default function Stat(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.modifier}</div>
      <input type="number" value={props.stat} onChange={props.onStatChange} />
    </div>
  );
}

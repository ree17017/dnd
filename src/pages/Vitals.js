import React from "react";
import ArmorClass from "../components/ArmorClass";
import HitPoints from "../components/HitPoints";
import Proficiency from "../components/Proficiency";

export default function Vitals(props) {
  return (
    <>
      <div>
        <ArmorClass />
        <Proficiency />
      </div>
      <div>
        <HitPoints />
      </div>
    </>
  );
}

import React from "react";
import ArmorClass from "../components/ArmorClass";
import DeathSaves from "../components/DeathSaves";
import HitDice from "../components/HitDice";
import HitPoints from "../components/HitPoints";
import Proficiency from "../components/Proficiency";
import TemporaryHitPoints from "../components/TemporaryHitPoints";

export default function Vitals(props) {
  return (
    <div className="vitals">
      <div>
        <ArmorClass />
        <Proficiency />
      </div>
      <div>
        <HitPoints />
        <DeathSaves />
      </div>
      <div>
        <HitDice />
        <TemporaryHitPoints />
      </div>
    </div>
  );
}

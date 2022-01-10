import React from "react";
import SavingThrows from "../components/SavingThrows";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import CharacterInfo from "../components/CharacterInfo";
import Vitals from "./Vitals";
import WornArmor from "../components/WornArmor";
import Personality from "../components/Personality";
import Spells from "../components/Spells";

function CharacterSheet(props) {
  return (
    <div className="grid-container">
      <div className="header">
        <CharacterInfo />
      </div>
      <div className="stats">
        <Stats />
      </div>
      <div className="savingthrows">
        <SavingThrows />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="health">
        <Vitals />
      </div>
      <div className="personality">
        <Personality />
      </div>
      <div className="wornArmor">
        <WornArmor />
      </div>
      <div className="spells">
        <Spells />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default CharacterSheet;

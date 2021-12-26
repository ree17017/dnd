import React from "react";
import SavingThrows from "../components/SavingThrows";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Proficiency from "../components/Proficiency";
import CharacterInfo from "../components/CharacterInfo";

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
        <Proficiency />
      </div>
      <div className="otherProficiencies"></div>
      <div className="footer"></div>
    </div>
  );
}

export default CharacterSheet;

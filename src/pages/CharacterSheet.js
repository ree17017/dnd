import React from "react";
import SavingThrows from "../components/SavingThrows";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Proficiency from "../components/Proficiency";

function CharacterSheet(props) {
  return (
    <div className="grid-container">
      <div class="header">
        <h1>CharacterSheet Page</h1>
      </div>
      <div class="stats">
        <Stats />
      </div>
      <div class="savingthrows">
        <SavingThrows />
      </div>
      <div class="skills">
        <Skills />
      </div>
      <div class="health">
        <Proficiency />
      </div>
      <div class="otherProficiencies"></div>
      <div class="footer">footer</div>
    </div>
  );
}

export default CharacterSheet;

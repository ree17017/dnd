import React from "react";
import SavingThrows from "../components/SavingThrows";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Proficiency from "../components/Proficiency";

function CharacterSheet(props) {
  return (
    <div>
      <h1>CharacterSheet Page</h1>
      <Stats />
      <SavingThrows />
      <Skills />
      <Proficiency />
    </div>
  );
}

export default CharacterSheet;

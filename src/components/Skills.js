import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";

export default function Skills(props) {
  const [str] = useLocalStorage("str");
  const [dex] = useLocalStorage("dex");
  const [con] = useLocalStorage("con");
  const [int] = useLocalStorage("int");
  const [wis] = useLocalStorage("wis");
  const [cha] = useLocalStorage("cha");
  const [proficiency] = useLocalStorage("proficiency", 2);
  const [skills, setSkills] = useLocalStorage("skills", []);

  const index = (name) => skills.indexOf(name);

  const SkillsEnum = {
    str: {
      athletics: "Athletics",
    },
    dex: {
      acrobatics: "Acrobatics",
      slight_of_hand: "Slight of Hand",
      stealth: "Stealth",
    },
    int: {
      arcana: "Arcana",
      history: "History",
      investigation: "Investigation",
      nature: "Nature",
      religion: "Religion",
    },
    wis: {
      animal_handling: "Animal Handling",
      insight: "Insight",
      medicine: "Medicine",
      perception: "Perception",
      survival: "Survival",
    },
    cha: {
      deception: "Deception",
      intimidation: "Intimidation",
      performance: "Performance",
      persuasion: "Persuasion",
    },
  };

  const skillTotal = (name, stat) => {
    if (skills.indexOf(name) > -1) {
      return +modifier(stat) + +proficiency;
    }

    return modifier(stat);
  };

  const handleOnChange = (event) => {
    if (index(event.target.name) === -1) {
      setSkills([...skills, event.target.name]);
      return;
    }

    if (index(event.target.name) > -1) {
      let thisIndex = index(event.target.name);
      let saveThis = skills.slice(thisIndex - 1, thisIndex);

      setSkills(saveThis);
    }
  };
  const isChecked = (name) => skills.indexOf(name) > -1;

  return (
    <div>
      <h4>Strength</h4>
      <ul>
        <li>
          {SkillsEnum.str.athletics}
          <input
            type="checkbox"
            name={SkillsEnum.str.athletics}
            onChange={(event) => handleOnChange(event)}
            checked={isChecked(SkillsEnum.str.athletics)}
          />
          {skillTotal(SkillsEnum.str.athletics, str)}
        </li>
        <li>
          {SkillsEnum.dex.acrobatics}
          <input
            type="checkbox"
            name={SkillsEnum.dex.acrobatics}
            onChange={(event) => handleOnChange(event)}
            checked={isChecked(SkillsEnum.dex.acrobatics)}
          />{" "}
          {skillTotal(SkillsEnum.dex.acrobatics, dex)}
        </li>
        <li>
          {SkillsEnum.dex.slight_of_hand}
          <input
            type="checkbox"
            name={SkillsEnum.dex.slight_of_hand}
            onChange={(event) => handleOnChange(event)}
            checked={isChecked(SkillsEnum.dex.slight_of_hand)}
          />{" "}
          {skillTotal(SkillsEnum.dex.slight_of_hand, dex)}
        </li>
      </ul>
    </div>
  );
}

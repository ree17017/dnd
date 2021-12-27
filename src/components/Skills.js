import React from "react";
import useLocalStorage from "react-localstorage-hook";
import { modifier } from "../tools/modifier";
import { SkillsEnum } from "./enums";

export default function Skills(props) {
  const [str] = useLocalStorage("str");
  const [dex] = useLocalStorage("dex");
  const [int] = useLocalStorage("int");
  const [wis] = useLocalStorage("wis");
  const [cha] = useLocalStorage("cha");
  const [proficiency] = useLocalStorage("proficiency", 2);
  const [skills, setSkills] = useLocalStorage("skills", []);

  const index = (name) => skills.indexOf(name);

  const skillTotal = (skill, stat) => {
    console.log({ stat });
    console.log(+modifier(stat.stat) + +proficiency + +stat.otherModifier);

    if (skills.indexOf(skill) > -1) {
      return +modifier(stat.stat) + +proficiency + +stat.otherModifier;
    }

    console.log(stat);
    return +modifier(stat.stat) + +stat.otherModifier;
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
        {Object.keys(SkillsEnum.str).map((skill) => {
          return (
            <Skill
              key={`str-${skill}`}
              name={SkillsEnum.str[skill]}
              skill={skill}
              handleOnChange={handleOnChange}
              isChecked={isChecked(skill)}
              stat={skillTotal(skill, str)}
            />
          );
        })}
      </ul>
      <h4>Dexterity</h4>
      <ul>
        {Object.keys(SkillsEnum.dex).map((skill) => {
          return (
            <Skill
              key={`dex-${skill}`}
              name={SkillsEnum.dex[skill]}
              skill={skill}
              handleOnChange={handleOnChange}
              isChecked={isChecked(skill)}
              stat={skillTotal(skill, dex)}
            />
          );
        })}
      </ul>
      <h4>Intelligence</h4>
      <ul>
        {Object.keys(SkillsEnum.int).map((skill) => {
          return (
            <Skill
              key={`int-${skill}`}
              name={SkillsEnum.int[skill]}
              skill={skill}
              handleOnChange={handleOnChange}
              isChecked={isChecked(skill)}
              stat={skillTotal(skill, int)}
            />
          );
        })}
      </ul>
      <h4>Wisdom</h4>
      <ul>
        {Object.keys(SkillsEnum.wis).map((skill) => {
          return (
            <Skill
              key={`wis-${skill}`}
              name={SkillsEnum.wis[skill]}
              skill={skill}
              handleOnChange={handleOnChange}
              isChecked={isChecked(skill)}
              stat={skillTotal(skill, wis)}
            />
          );
        })}
      </ul>
      <h4>Charisma</h4>
      <ul>
        {Object.keys(SkillsEnum.cha).map((skill) => {
          return (
            <Skill
              key={`cha-${skill}`}
              skill={skill}
              name={SkillsEnum.cha[skill]}
              handleOnChange={handleOnChange}
              isChecked={isChecked(skill)}
              stat={skillTotal(skill, cha)}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Skill({ name, skill, handleOnChange, isChecked, stat }) {
  return (
    <li key={`${name}-${skill}`}>
      <input
        type="checkbox"
        name={skill}
        onChange={(event) => handleOnChange(event)}
        checked={isChecked}
      />
      <span>{name}</span>
      <span>{stat}</span>
    </li>
  );
}

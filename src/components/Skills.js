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
  const [proficiency] = useLocalStorage("proficiency");
  const [skills, setSkills] = useLocalStorage("skills");
  const [expertise, setExpertise] = useLocalStorage("expertise");

  const skillIndex = (name) => skills.indexOf(name);
  const expertiseIndex = (name) => expertise.indexOf(name);

  const skillTotal = (skill, stat) => {
    let total = 0;
    if (skillIndex(skill) > -1) {
      total += +proficiency;
    }

    if (expertiseIndex(`expertise-${skill}`) > -1) {
      total += +proficiency;
    }

    return +modifier(stat.stat) + +stat.otherModifier + +total;
  };

  const handleSkillChange = (event) => {
    if (skillIndex(event.target.name) === -1) {
      setSkills([...skills, event.target.name]);
      return;
    }

    if (skillIndex(event.target.name) > -1) {
      let thisIndex = skillIndex(event.target.name);
      let saveThis = skills.slice(thisIndex - 1, thisIndex);

      setSkills(saveThis);
    }
  };

  const handleExpertiseChange = (event) => {
    if (expertiseIndex(event.target.name) === -1) {
      setExpertise([...expertise, event.target.name]);
      return;
    }

    if (expertiseIndex(event.target.name) > -1) {
      let thisIndex = expertiseIndex(event.target.name);
      let saveThis = expertise.slice(thisIndex - 1, thisIndex);

      setExpertise(saveThis);
    }
  };

  const isSkillChecked = (name) => skills.indexOf(name) > -1;
  const isExpertiseChecked = (name) =>
    expertise.indexOf(`expertise-${name}`) > -1;

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
              handleSkillChange={handleSkillChange}
              handleExpertiseChange={handleExpertiseChange}
              isSkillChecked={isSkillChecked(skill)}
              isExpertiseChecked={isExpertiseChecked(skill)}
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
              handleSkillChange={handleSkillChange}
              handleExpertiseChange={handleExpertiseChange}
              isSkillChecked={isSkillChecked(skill)}
              isExpertiseChecked={isExpertiseChecked(skill)}
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
              handleSkillChange={handleSkillChange}
              handleExpertiseChange={handleExpertiseChange}
              isSkillChecked={isSkillChecked(skill)}
              isExpertiseChecked={isExpertiseChecked(skill)}
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
              handleSkillChange={handleSkillChange}
              handleExpertiseChange={handleExpertiseChange}
              isSkillChecked={isSkillChecked(skill)}
              isExpertiseChecked={isExpertiseChecked(skill)}
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
              handleSkillChange={handleSkillChange}
              handleExpertiseChange={handleExpertiseChange}
              isSkillChecked={isSkillChecked(skill)}
              isExpertiseChecked={isExpertiseChecked(skill)}
              stat={skillTotal(skill, cha)}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Skill({
  name,
  skill,
  handleExpertiseChange,
  handleSkillChange,
  isSkillChecked,
  isExpertiseChecked,
  stat,
}) {
  return (
    <li key={`${name}-${skill}`}>
      <input
        type="checkbox"
        name={`expertise-${skill}`}
        onChange={(event) => handleExpertiseChange(event)}
        checked={isExpertiseChecked}
      />
      <input
        type="checkbox"
        name={skill}
        onChange={(event) => handleSkillChange(event)}
        checked={isSkillChecked}
      />
      <span>{name}</span>
      <span>{stat}</span>
    </li>
  );
}

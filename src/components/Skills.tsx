import React from 'react';
import useLocalStorage from 'react-localstorage-hook';
import { modifier } from '../tools/modifier';
import { SkillsEnum } from './enums';

export default function Skills() {
  const [str] = useLocalStorage('str');
  const [dex] = useLocalStorage('dex');
  const [int] = useLocalStorage('int');
  const [wis] = useLocalStorage('wis');
  const [cha] = useLocalStorage('cha');
  const [proficiency] = useLocalStorage('proficiency');
  const [skills, setSkills] = useLocalStorage('skills');
  const [expertise, setExpertise] = useLocalStorage('expertise');

  const skillIndex = (name: string) => skills.indexOf(name);
  const expertiseIndex = (name: string) => expertise.indexOf(name);
  const isSkillChecked = (name: string) => skills.indexOf(name) > -1;
  const isExpertiseChecked = (name: string) =>
    expertise.indexOf(`expertise-${name}`) > -1;

  const skillTotal = (skill: any, stat: any) => {
    let total = 0;
    if (skillIndex(skill) > -1) {
      total += +proficiency;
    }

    if (expertiseIndex(`expertise-${skill}`) > -1) {
      total += +proficiency;
    }

    return +modifier(stat.stat) + +stat.otherModifier + +total;
  };

  const handleSkillChange = (event: any) => {
    if (skillIndex(event.target.name) === -1) {
      setSkills([...skills, event.target.name]);
      return;
    }

    if (skillIndex(event.target.name) > -1) {
      let saveThis = skills.filter((skills: any) => skills !== event.target.name);

      setSkills(saveThis);
    }

    if (expertiseIndex(`expertise-${event.target.name}`) > -1) {
      let saveThis = expertise.filter(
        (expertise: any) => expertise !== `expertise-${event.target.name}`
      );

      setExpertise(saveThis);
    }
  };

  const handleExpertiseChange = (event: any) => {
    if (
      expertiseIndex(event.target.name) === -1 &&
      skillIndex(event.target.name) === -1
    ) {
      setExpertise([...expertise, event.target.name]);
      return;
    }

    if (expertiseIndex(event.target.name) > -1) {
      let saveThis = expertise.filter(
        (expertise: any) => expertise !== event.target.name
      );

      setExpertise(saveThis);
    }
  };

  return (
    <div style={{ width: '250px' }}>
      <div className="skill_title">Strength</div>
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
      <div className="skill_title">
        Dexterity
      </div>
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
      <div className="skill_title">
        Intelligence
      </div>
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
      <div className="skill_title">
        Wisdom
      </div>
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
      <div className="skill_title">
        Charisma
      </div>
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
    </div>
  );
}

interface SkillProps {
  name: any;
  skill: any;
  handleExpertiseChange: any;
  handleSkillChange: any;
  isSkillChecked: any;
  isExpertiseChecked: any;
  stat: any;
}

function Skill({
  name,
  skill,
  handleExpertiseChange,
  handleSkillChange,
  isSkillChecked,
  isExpertiseChecked,
  stat,
}: SkillProps) {
  return (
    <div className="skill_flex-container">
      <div> {name} </div>
      <div className="skill_checkbox" key={`${name}-${skill}`}>
        <input
          type="checkbox"
          name={`expertise-${skill}`}
          onChange={(event) => handleExpertiseChange(event)}
          checked={isExpertiseChecked && isSkillChecked}
          disabled={!isSkillChecked}
        />
        <input
          type="checkbox"
          name={skill}
          onChange={(event) => handleSkillChange(event)}
          checked={isSkillChecked}
        />
      </div>
      <div className="skill_stat-size">{stat}</div>
    </div>
  );
}

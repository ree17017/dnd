import React from 'react';
import SavingThrows from '../components/SavingThrows';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import CharacterInfo from '../components/CharacterInfo';
import Vitals from './Vitals';
import WornArmor from '../components/WornArmor';
import Personality from '../components/Personality';
import Spells from '../components/Spells';
import Feats from '../components/Feats';
import OtherProficiencies from '../components/OtherProficiencies';
import useLocalStorage from 'react-localstorage-hook';

function CharacterSheet(props) {
  const [wornArmor] = useLocalStorage('wornArmor');
  const [acBonus, setAcBonus] = useLocalStorage('acBonus');
  const [str, setStr] = useLocalStorage('str', { stat: 0, otherModifier: 0 });
  const [dex, setDex] = useLocalStorage('dex', { stat: 0, otherModifier: 0 });
  const [con, setCon] = useLocalStorage('con', { stat: 0, otherModifier: 0 });
  const [int, setInt] = useLocalStorage('int', { stat: 0, otherModifier: 0 });
  const [wis, setWis] = useLocalStorage('wis', { stat: 0, otherModifier: 0 });
  const [cha, setCha] = useLocalStorage('cha', { stat: 0, otherModifier: 0 });
  const [lockStats, setLockStats] = useLocalStorage('lockStats', false);

  return (
    <div className="grid-container">
      <div className="header">
        <CharacterInfo />
      </div>
      <div className="stats">
        <Stats
          cha={cha}
          con={con}
          dex={dex}
          int={int}
          lockStats={lockStats}
          setCha={setCha}
          setCon={setCon}
          setDex={setDex}
          setInt={setInt}
          setLockStats={setLockStats}
          setStr={setStr}
          setWis={setWis}
          str={str}
          wis={wis}
        />
      </div>
      <div className="savingthrows">
        <SavingThrows />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="health">
        <Vitals
          acBonus={acBonus}
          dex={dex}
          setAcBonus={setAcBonus}
          wornArmor={wornArmor}
        />
      </div>
      <div className="personality">
        <Personality />
        <OtherProficiencies />
      </div>
      <div className="wornArmor">
        <WornArmor />
      </div>
      <div className="feats">
        <Feats />
      </div>
      <div className="spells">
        <Spells />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default CharacterSheet;

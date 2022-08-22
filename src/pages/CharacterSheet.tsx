import CharacterInfo from '../components/CharacterInfo';
import Feats from '../components/Feats';
import OtherProficiencies from '../components/OtherProficiencies';
import Personality from '../components/Personality';
import React from 'react';
import SavingThrows from '../components/SavingThrows';
import Skills from '../components/Skills';
import Spells from '../components/Spells';
import Stats, { useWithStats } from '../components/Stats';
import Vitals from './Vitals';
import WornArmor from '../components/WornArmor';
import useLocalStorage from 'react-localstorage-hook';
import { calculateModifier } from '../tools/calculateModifier';

function CharacterSheet() {
  const [wornArmor] = useLocalStorage('wornArmor');
  const [acBonus, setAcBonus] = useLocalStorage('acBonus');

  const stats = useWithStats();
  
  const dexModifier = +calculateModifier(stats.dex.stat.value) + +stats.dex.otherModifier.value;
  const wisModifier = +calculateModifier(stats.dex.stat.value) + +stats.dex.otherModifier.value;

  return (
    <div className="grid-container">
      <div className="header">
        <CharacterInfo />
      </div>
      <div className="stats">
        <Stats {...stats} />
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
          dexModifier={dexModifier}
          wisModifier={wisModifier}
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
      <div className="footer" />
    </div>
  );
}

export default CharacterSheet;

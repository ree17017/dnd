import React from 'react';
import ArmorClass from '../components/ArmorClass';
import Attacks from '../components/Attacks';
import DeathSaves from '../components/DeathSaves';
import HitDice from '../components/HitDice';
import HitPoints from '../components/HitPoints';
import Proficiency from '../components/Proficiency';

export default function Vitals(props) {
  const { dex, wornArmor, acBonus, setAcBonus } = props;
  return (
    <div>
      <div className="vitals">
        <div>
          <ArmorClass
            dex={dex}
            wornArmor={wornArmor}
            acBonus={acBonus}
            setAcBonus={setAcBonus}
          />
          <Proficiency />
        </div>
        <div>
          <HitPoints />
          <DeathSaves />
        </div>
        <div>
          <HitDice />
        </div>
      </div>
      <Attacks />
    </div>
  );
}

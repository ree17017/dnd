import ArmorClass from '../components/ArmorClass';
import Attacks from '../components/Attacks';
import DeathSaves from '../components/DeathSaves';
import HitDice from '../components/HitDice';
import HitPoints from '../components/HitPoints';
import Proficiency from '../components/Proficiency';
import PropTypes from 'prop-types';
import React from 'react';

interface VitalsProps {
  dex: string,
  wornArmor: string,
  acBonus: string,
  setAcBonus: () => void,

}

export default function Vitals(props: any) {
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

Vitals.prototype = {
  dex: PropTypes.string,
  wornArmor: PropTypes.string,
  acBonus: PropTypes.string,
  setAcBonus: PropTypes.func,
};

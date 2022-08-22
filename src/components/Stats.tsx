import React from 'react';
import Stat from './Stat';
import { modifier } from '../tools/modifier';

interface StatProps {
  cha: string,
  con: string,
  dex: string,
  int: string,
  lockStats: boolean,
  otherModifier: string,
  setCha: () => void,
  setCon: () => void,
  setDex: () => void,
  setInt: () => void,
  setLockStats: string,
  setStr: () => void,
  setWis: () => void,
  stat: string,
  str: string,
  wis: string,
  modifier: string,
}

export default function Stats(props: any) {
  const {
    cha,
    con,
    dex,
    int,
    lockStats,
    setCha,
    setCon,
    setDex,
    setInt,
    setLockStats,
    setStr,
    setWis,
    str,
    wis,
  } = props;

  const handleStatChange = (event: any) => {
    switch (event.target.name) {
      case 'Strength':
        setStr({ ...str, stat: event.target.value });
        break;
      case 'Dexterity':
        setDex({ ...dex, stat: event.target.value });
        break;
      case 'Constitution':
        setCon({ ...con, stat: event.target.value });
        break;
      case 'Intelligence':
        setInt({ ...int, stat: event.target.value });
        break;
      case 'Wisdom':
        setWis({ ...wis, stat: event.target.value });
        break;
      case 'Charisma':
        setCha({ ...cha, stat: event.target.value });
        break;
      default:
    }
  };
  const handleOtherModifierChange = (event: any) => {
    switch (event.target.name) {
      case 'Strength':
        setStr({ ...str, otherModifier: event.target.value });
        break;
      case 'Dexterity':
        setDex({ ...dex, otherModifier: event.target.value });
        break;
      case 'Constitution':
        setCon({ ...con, otherModifier: event.target.value });
        break;
      case 'Intelligence':
        setInt({ ...int, otherModifier: event.target.value });
        break;
      case 'Wisdom':
        setWis({ ...wis, otherModifier: event.target.value });
        break;
      case 'Charisma':
        setCha({ ...cha, otherModifier: event.target.value });
        break;
      default:
    }
  };

  const handleLockStats = () => {
    setLockStats(!lockStats);
  };

  const isLocked = lockStats ? 'Locked' : 'Unlocked';
  return (
    <div>
      <button type="button" aria-label="lock" onClick={handleLockStats}>
        {isLocked}
      </button>
      <ul>
        <Stat
          name={'Strength'}
          modifier={Number(modifier(str.stat)) + Number(str.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={str.stat}
          otherModifier={str.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Dexterity'}
          modifier={Number(modifier(dex.stat)) + Number(dex.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={dex.stat}
          otherModifier={dex.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Constitution'}
          modifier={Number(modifier(con.stat)) + Number(con.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={con.stat}
          otherModifier={con.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Intelligence'}
          modifier={Number(modifier(int.stat)) + Number(int.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={int.stat}
          otherModifier={int.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Wisdom'}
          modifier={Number(modifier(wis.stat)) + Number(wis.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={wis.stat}
          otherModifier={wis.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Charisma'}
          modifier={Number(modifier(cha.stat)) + Number(cha.otherModifier)}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={cha.stat}
          otherModifier={cha.otherModifier}
          lockStats={lockStats}
        />
      </ul>
    </div>
  );
}
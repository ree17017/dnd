import React from 'react';
import Stat from './Stat'
import { modifier } from '../tools/modifier';

export default function Stats(props) {
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

  const handleStatChange = (event) => {
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
        console.error('Something went wrong', event);
    }
  };
  const handleOtherModifierChange = (event) => {
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
        console.error('Something went wrong', event);
    }
  };

  const handleLockStats = () => {
    setLockStats(!lockStats);
  };

  const isLocked = lockStats ? 'Locked' : 'Unlocked';
  return (
    <div>
      <button aria-label="lock" onClick={handleLockStats}>
        {isLocked}
      </button>
      <ul>
        <Stat
          name={'Strength'}
          modifier={+modifier(str.stat) + +str.otherModifier}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={str.stat}
          otherModifier={str.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Dexterity'}
          modifier={+modifier(dex.stat) + +dex.otherModifier}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={dex.stat}
          otherModifier={dex.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Constitution'}
          modifier={+modifier(con.stat) + +con.otherModifier}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={con.stat}
          otherModifier={con.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Intelligence'}
          modifier={+modifier(int.stat) + +int.otherModifier}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={int.stat}
          otherModifier={int.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Wisdom'}
          modifier={+modifier(wis.stat) + +wis.otherModifier}
          handleStatChange={handleStatChange}
          handleOtherModifierChange={handleOtherModifierChange}
          stat={wis.stat}
          otherModifier={wis.otherModifier}
          lockStats={lockStats}
        />
        <Stat
          name={'Charisma'}
          modifier={+modifier(cha.stat) + +cha.otherModifier}
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



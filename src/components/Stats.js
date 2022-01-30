import PropTypes from 'prop-types';
import React from 'react';
import Stat from './Stat';
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
          modifier={Number(modifier(str.stat)) + +str.otherModifier}
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

Stats.prototype = {
  cha: PropTypes.string.require,
  con: PropTypes.string.require,
  dex: PropTypes.string.require,
  int: PropTypes.string.require,
  lockStats: PropTypes.boolean,
  otherModifier: PropTypes.string,
  setCha: PropTypes.func,
  setCon: PropTypes.func,
  setDex: PropTypes.func,
  setInt: PropTypes.func,
  setLockStats: PropTypes.string,
  setStr: PropTypes.func,
  setWis: PropTypes.func,
  stat: PropTypes.string,
  str: PropTypes.string.require,
  wis: PropTypes.string.require,
  modifier: PropTypes.string,
};

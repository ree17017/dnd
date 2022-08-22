import React from 'react';
import LockButton, { LockButtonProps, useWithLockButton } from './form/LockButton';
import Stat, { StatProps, useWithStat } from './Stat';

export interface StatsProps {
  lock: LockButtonProps; 
  str: StatProps; 
  dex: StatProps;
  con: StatProps; 
  int: StatProps;
  wis: StatProps;
  cha: StatProps;
}

export default function Stats({
  lock,
  str,
  dex,
  con,
  int,
  wis,
  cha,
}: StatsProps) {

  return (
    <div>
      <LockButton {...lock} />
      <ul>
        <Stat {...str} />
        <Stat {...dex} />
        <Stat {...con} />
        <Stat {...int} />
        <Stat {...wis} />
        <Stat {...cha} />
      </ul>
    </div>
  );
}

export const useWithStats = () => {
  const lock = useWithLockButton();

  const str = useWithStat({ 
    id: 'str',
    name: 'Strength', 
    isLocked: lock.isLocked,
  });

  const dex = useWithStat({ 
    id: 'dex',
    name: 'Dexterity', 
    isLocked: lock.isLocked,
  });

  const con = useWithStat({ 
    id: 'con',
    name: 'Constitution', 
    isLocked: lock.isLocked,
  });
  
  const int = useWithStat({ 
    id: 'int',
    name: 'Intelligence', 
    isLocked: lock.isLocked,
  });

  const wis  = useWithStat({ 
    id: 'wis',
    name: 'Wisdom', 
    isLocked: lock.isLocked,
  });
  
  const cha = useWithStat({ 
    id: 'cha',
    name: 'Charisma', 
    isLocked: lock.isLocked,
  });
  
  return {
    lock,
    str,
    dex,
    con,
    int,
    wis,
    cha,
  }
}
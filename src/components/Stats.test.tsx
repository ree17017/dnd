import React from 'react';
import { SmallNumberInputProps } from './form/SmallNumberInput';
import Stats, { StatsProps } from './Stats';
import { render, screen } from '@testing-library/react';
import { StatProps } from './Stat';

const names = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
}

const inputProps: SmallNumberInputProps = {
  name: '',
  isLocked: false,
  value: 0,
  onChange: () => {}
}

const generateStatProps = (stat: number, othMod: number, name: string, isLocked: boolean): StatProps => {
  return {
    name, 
    stat: {
      name,
      isLocked: false,
      value: stat,
      onChange: () => {}
    },
    otherModifier: {
      name,
      isLocked: false,
      value: othMod,
      onChange: () => {}
    },
  }
}

const generateStatsProps = (stat: number, othMod: number, isLocked: boolean): StatsProps => {
  return {
    str: generateStatProps(stat, othMod, names.str, isLocked),
    dex: generateStatProps(stat, othMod, names.dex, isLocked),
    con: generateStatProps(stat, othMod, names.con, isLocked),
    int: generateStatProps(stat, othMod, names.int, isLocked),
    wis: generateStatProps(stat, othMod, names.wis, isLocked),
    cha: generateStatProps(stat, othMod, names.cha, isLocked),
    lock: { 
      isLocked: false, 
      onClick: () => {},
    }
  }
}

describe('Stats Unit Tests', () => {
  const props: StatsProps = generateStatsProps(0, 0, false);
  const props10: StatsProps = generateStatsProps(10, 0, false);
  const props11: StatsProps = generateStatsProps(10, 1, false);
  
  it('should render -5 for a new user', () => {
    render(<Stats {...props} />);

    expect(screen.getByLabelText('Strength')).toHaveTextContent('-5');
    expect(screen.getByLabelText('Dexterity')).toHaveTextContent('-5');
    expect(screen.getByLabelText('Constitution')).toHaveTextContent('-5');
    expect(screen.getByLabelText('Intelligence')).toHaveTextContent('-5');
    expect(screen.getByLabelText('Wisdom')).toHaveTextContent('-5');
    expect(screen.getByLabelText('Charisma')).toHaveTextContent('-5');
  });

  it('should render 0 for a stat of 10', () => {
    render(<Stats {...props10} />);

    expect(screen.getByLabelText('Strength')).toHaveTextContent('0');
    expect(screen.getByLabelText('Dexterity')).toHaveTextContent('0');
    expect(screen.getByLabelText('Constitution')).toHaveTextContent('0');
    expect(screen.getByLabelText('Intelligence')).toHaveTextContent('0');
    expect(screen.getByLabelText('Wisdom')).toHaveTextContent('0');
    expect(screen.getByLabelText('Charisma')).toHaveTextContent('0');
  });

  it('should render 1 for a stat of 10 + 1 otherModifier', () => {
    render(<Stats {...props11} />);

    expect(screen.getByLabelText('Strength')).toHaveTextContent('1');
    expect(screen.getByLabelText('Dexterity')).toHaveTextContent('1');
    expect(screen.getByLabelText('Constitution')).toHaveTextContent('1');
    expect(screen.getByLabelText('Intelligence')).toHaveTextContent('1');
    expect(screen.getByLabelText('Wisdom')).toHaveTextContent('1');
    expect(screen.getByLabelText('Charisma')).toHaveTextContent('1');
  });

  it('should render Locked', async () => {
    const propsForTest: StatsProps = {
      ...props,
      lock: { 
        ...props.lock,
        isLocked: true, 
      }
    };
    render(<Stats {...propsForTest} />);

    expect(await screen.getByLabelText('lock')).toHaveTextContent('Locked');
  });

  it('should render Unlocked', async () => {
    const propsForTest: StatsProps = {
      ...props,
      lock: { 
        ...props.lock,
        isLocked: false, 
      }
    };
    render(<Stats {...propsForTest} />);

    expect(await screen.getByLabelText('lock')).toHaveTextContent('Unlock');
  });
});

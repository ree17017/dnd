import React from 'react';
import Stats from './Stats';
import { screen, render } from '@testing-library/react';

describe('Stats Unit Tests', () => {
  const props = {
    str: { stat: 0, otherModifier: 0 },
    dex: { stat: 0, otherModifier: 0 },
    con: { stat: 0, otherModifier: 0 },
    int: { stat: 0, otherModifier: 0 },
    wis: { stat: 0, otherModifier: 0 },
    cha: { stat: 0, otherModifier: 0 },
    lockStats: false,
  };

  const props10 = {
    str: { stat: 10, otherModifier: 0 },
    dex: { stat: 10, otherModifier: 0 },
    con: { stat: 10, otherModifier: 0 },
    int: { stat: 10, otherModifier: 0 },
    wis: { stat: 10, otherModifier: 0 },
    cha: { stat: 10, otherModifier: 0 },
    lockStats: false,
  };

  const props11 = {
    str: { stat: 10, otherModifier: 1 },
    dex: { stat: 10, otherModifier: 1 },
    con: { stat: 10, otherModifier: 1 },
    int: { stat: 10, otherModifier: 1 },
    wis: { stat: 10, otherModifier: 1 },
    cha: { stat: 10, otherModifier: 1 },
    lockStats: false,
  };
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
    const propsForTest = {
      ...props,
      lockStats: true,
    };
    render(<Stats {...propsForTest} />);

    expect(await screen.getByLabelText('lock')).toHaveTextContent('Locked');
  });

  it('should render Unlocked', async () => {
    const propsForTest = {
      ...props,
      lockStats: false,
    };
    render(<Stats {...propsForTest} />);

    expect(await screen.getByLabelText('lock')).toHaveTextContent('Unlock');
  });
});

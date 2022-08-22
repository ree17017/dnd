import { fireEvent, render } from '@testing-library/react';

import HitPoints from './HitPoints';
import React from 'react';
import { screen } from '@testing-library/react';

describe('HitPoint Unit Tests', () => {
  it('Hitpoints calculate correctly', () => {
    render(<HitPoints />);

    expect(screen.getByText('0 + 0 = 0')).toBeInTheDocument();

    const maxInput = screen.getByRole('plus');

    fireEvent.click(maxInput);

    expect(screen.getByText(' 1 + 0 = 1')).toBeInTheDocument();
  });
});

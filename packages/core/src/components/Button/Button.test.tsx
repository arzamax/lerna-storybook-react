import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

const setup = () => render(<Button />);

describe('Button test', () => {
  test('snapshot', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});

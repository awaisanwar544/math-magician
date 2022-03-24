import React from 'react';
import renderer from 'react-test-renderer';

import CalculatorPage from './CalculatorPage';

describe('Calculator', () => {
  it('Displays correct layout of Calculator', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

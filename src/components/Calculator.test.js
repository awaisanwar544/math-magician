import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from './Calculator';

describe('Calculator', () => {
  it('Displays correct layout of Calculator', () => {
    const tree = renderer
      .create(<Calculator className="calculator" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

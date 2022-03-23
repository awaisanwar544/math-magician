import React from 'react';
import renderer from 'react-test-renderer';

import CalcKey from './CalcKey';

describe('Calculator Keys', () => {
  it('Displays correct text on the calculator key', () => {
    const calculatorKey = renderer
      .create(<CalcKey
        key={7}
        category="other"
        keyValue="7"
        onClick={jest.fn(() => 7)}
      />)
      .toJSON();
    expect(calculatorKey).toMatchSnapshot();
  });
});

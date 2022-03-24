import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('Displays Correct Result', () => {
  it('Displays correct answer', () => {
    const tree = renderer
      .create(<Display value="70" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

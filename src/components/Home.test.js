import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

describe('Calculator', () => {
  it('Displays correct layout of Calculator', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import Quote from './Quote';

describe('Calculator', () => {
  it('Displays correct layout of Calculator', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

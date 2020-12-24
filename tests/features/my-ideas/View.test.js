import React from 'react';
import { shallow } from 'enzyme';
import { View } from '../../../src/features/my-ideas/View';

describe('my-ideas/View', () => {
  it('renders node with correct class name', () => {
    const props = {
      myIdeas: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <View {...props} />
    );

    expect(
      renderedComponent.find('.my-ideas-view').length
    ).toBe(1);
  });
});

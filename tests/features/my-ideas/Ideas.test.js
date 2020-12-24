import React from 'react';
import { shallow } from 'enzyme';
import { Ideas } from '../../../src/features/my-ideas/Ideas';

describe('my-ideas/Ideas', () => {
  it('renders node with correct class name', () => {
    const props = {
      myIdeas: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Ideas {...props} />
    );

    expect(
      renderedComponent.find('.my-ideas-ideas').length
    ).toBe(1);
  });
});

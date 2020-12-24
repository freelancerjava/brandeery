import React from 'react';
import { shallow } from 'enzyme';
import { Test } from '../../../src/features/test/Test';

describe('test/Test', () => {
  it('renders node with correct class name', () => {
    const props = {
      test: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Test {...props} />
    );

    expect(
      renderedComponent.find('.test-test').length
    ).toBe(1);
  });
});

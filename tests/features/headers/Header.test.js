import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/headers/Header';

describe('headers/Header', () => {
  it('renders node with correct class name', () => {
    const props = {
      headers: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Header {...props} />
    );

    expect(
      renderedComponent.find('.headers-header').length
    ).toBe(1);
  });
});

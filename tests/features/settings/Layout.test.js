import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/settings';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.settings-layout').length).toBe(1);
});

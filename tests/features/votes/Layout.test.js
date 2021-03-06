import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/votes';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.votes-layout').length).toBe(1);
});

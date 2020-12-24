import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/my-ideas';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.my-ideas-layout').length).toBe(1);
});

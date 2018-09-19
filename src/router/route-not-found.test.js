import React from 'react';
import { shallow } from 'enzyme';

import RouteNotFound from './route-not-found';

describe('RouteNotFound', () => {
  test('Renders', () => {
    const wrapper = shallow(
      <RouteNotFound />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

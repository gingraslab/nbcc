/* eslint import/newline-after-import: "off" */
import React from 'react';
import { shallow } from 'enzyme';

import Router from './router';

describe('Router', () => {
  test('Renders', () => {
    const wrapper = shallow(
      <Router />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

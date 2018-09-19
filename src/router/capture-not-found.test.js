import React from 'react';
import { shallow } from 'enzyme';

import { CaptureRouteNotFoundComponent } from './capture-not-found';

describe('CaptureNotFound', () => {
  test('Renders missing on notFoundError', () => {
    const wrapper = shallow(
      <CaptureRouteNotFoundComponent location={{ state: { notFoundError: true } }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render children otherwise', () => {
    const wrapper = shallow(
      <CaptureRouteNotFoundComponent location={{ state: {} }}>
        <div />
      </CaptureRouteNotFoundComponent>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

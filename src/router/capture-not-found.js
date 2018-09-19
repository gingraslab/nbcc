import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import Missing from '../404/404';

export const CaptureRouteNotFoundComponent = ({
  children,
  location,
}) => (
  location && location.state && location.state.notFoundError ? <Missing /> : children
);

CaptureRouteNotFoundComponent.defaultProps = {
  children: null,
  location: null,
};

CaptureRouteNotFoundComponent.propTypes = {
  children: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

export default withRouter(CaptureRouteNotFoundComponent);

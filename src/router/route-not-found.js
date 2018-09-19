import React from 'react';
import { Redirect } from 'react-router-dom';

const RouteNotFound = () => (
  <Redirect to={{ state: { notFoundError: true } }} />
);
export default RouteNotFound;

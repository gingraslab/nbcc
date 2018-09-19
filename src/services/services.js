import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './services__home';
import RouteNotFound from '../router/route-not-found';
import Proteomics from './__proteomics/services__proteomics';

const Services = () => (
  <Switch>
    <Route
      exact
      path="/services"
      component={Home}
    />
    <Route
      exact
      path="/services/proteomics"
      component={Proteomics}
    />
    <RouteNotFound />
  </Switch>
);

export default Services;

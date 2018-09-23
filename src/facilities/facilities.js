import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './facilities__home';
import RouteNotFound from '../router/route-not-found';
import Proteomics from './__proteomics/facilities__proteomics';

const Facilities = () => (
  <Switch>
    <Route
      exact
      path="/facilities"
      component={Home}
    />
    <Route
      exact
      path="/facilities/proteomics"
      component={Proteomics}
    />
    <RouteNotFound />
  </Switch>
);

export default Facilities;

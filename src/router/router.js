import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App';
import CaptureRouteNotFound from './capture-not-found';
import Missing from '../404/404';

const Routes = () => (
  <Router basename={process.env.REACT_APP_BASENAME}>
    <CaptureRouteNotFound>
      <Switch>
        <Route
          path="/"
          component={App}
        />
        <Route
          path="*"
          component={Missing}
        />
      </Switch>
    </CaptureRouteNotFound>
  </Router>
);
export default Routes;

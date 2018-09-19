import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './footer/footer';
import Home from './home/home';
import Navbar from './navbar/navbar';
import RouteNotFound from './router/route-not-found';
import Services from './services/services';

const App = () => (
  <div>
    <Navbar
      background={false}
      fixed={false}
      links={[
        {
          route: '/services',
          text: 'Services',
        },
        {
          route: '/resources',
          text: 'Resources',
        },
        {
          route: '/personnel',
          text: 'Personnel',
        },
        {
          route: '/about',
          text: 'About',
        },
      ]}
      shadow={false}
    />
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/services"
        component={Services}
      />
      <RouteNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './footer/footer';
import Home from './home/home';
import Navbar from './navbar/navbar';
import RouteNotFound from './router/route-not-found';
import Facilities from './facilities/facilities';

const App = () => (
  <div>
    <Navbar
      background={false}
      fixed={false}
      links={[
        {
          route: '/facilities',
          text: 'Facilities',
        },
        {
          route: '/resources',
          text: 'Resources',
        },
        {
          route: '/publications',
          text: 'Publications',
        },
        {
          route: '/about',
          text: 'About',
        },
        {
          route: '/news',
          text: 'News',
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
        path="/facilities"
        component={Facilities}
      />
      <RouteNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;

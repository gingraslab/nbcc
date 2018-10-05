import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './about/about';
import Facilities from './facilities/facilities';
import Footer from './footer/footer';
import Home from './home/home';
import Navbar from './navbar/navbar';
import Publications from './publications/publications';
import RouteNotFound from './router/route-not-found';

const App = () => (
  <div>
    <Navbar
      background={false}
      contact="/about#contact"
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
          route: '/news',
          text: 'News',
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
        exact
        path="/about"
        component={About}
      />
      <Route
        path="/facilities"
        component={Facilities}
      />
      <Route
        exact
        path="/publications"
        component={Publications}
      />
      <RouteNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;

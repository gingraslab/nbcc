import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './about/about';
import Facilities from './facilities/facilities';
import Footer from './footer/footer';
import Home from './home/home';
import Navbar from './navbar/navbar';
import News from './news/news-container';
import Publications from './publications/publications';
import Resources from './resources/resources';
import RouteNotFound from './router/route-not-found';

const App = () => (
  <div>
    <Navbar />
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
        path="/news/:title?"
        component={News}
      />
      <Route
        exact
        path="/publications"
        component={Publications}
      />
      <Route
        exact
        path="/resources"
        component={Resources}
      />
      <RouteNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;

import React from 'react';

import Landing from './__landing/home__landing';
import Personnel from './__personnel/home__personnel';
import Services from './__services/home__services';

import './home.css';

const Home = () => (
  <main>
    <Landing />
    <Services />
    <Personnel />
  </main>
);

export default Home;

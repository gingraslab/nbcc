import React from 'react';

import Landing from './__landing/home__landing';
import Personnel from './__personnel/home__personnel';
import Facilities from './__facilities/home__facilities';

import './home.css';

const Home = () => (
  <main>
    <Landing />
    <Facilities />
    <Personnel />
  </main>
);

export default Home;

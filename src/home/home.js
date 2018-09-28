import React from 'react';

import Facilities from './__facilities/home__facilities';
import Landing from './__landing/home__landing';
import Personnel from './__personnel/home__personnel';
import Resources from './__resources/home__resources';

import './home.css';

const Home = () => (
  <main>
    <Landing />
    <Facilities />
    <Resources />
    <Personnel />
  </main>
);

export default Home;

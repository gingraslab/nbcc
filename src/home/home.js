import React from 'react';

import Facilities from './__facilities/home__facilities';
import Landing from './__landing/home__landing';
import Management from './__management/home__management';
import Resources from './__resources/home__resources';

import './home.css';

const Home = () => (
  <main>
    <Landing />
    <Facilities />
    <Resources />
    <Management />
  </main>
);

export default Home;

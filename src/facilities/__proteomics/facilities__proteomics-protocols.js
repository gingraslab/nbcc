import React from 'react';

import Books from '../../assets/icons/books';
import List from './proteomics-protocols';

const Protocols = () => (
  <section
    className="facilities__section facilities__protocols"
    id="protocols"
  >
    <div className="facilities__section-inner">
      <h2>
        <Books />
        Protocols
      </h2>
      <List />
    </div>
  </section>
);

export default Protocols;

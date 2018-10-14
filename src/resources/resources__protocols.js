import React from 'react';

import Books from '../assets/icons/books';
import Protoemics from '../facilities/__proteomics/proteomics-protocols';

const Protocols = () => (
  <section
    className="resources__section resources__protocols"
    id="protocols"
  >
    <h2>
      <Books />
      <span>Protocols</span>
    </h2>
    <h3>Proteomics</h3>
    <Protoemics />
  </section>
);

export default Protocols;

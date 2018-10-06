import React from 'react';

import Citation from './publications__citation';
import Performance from './publications__performance';

import './publications.css';

const Publications = () => (
  <main className="publications">
    <div className="publications__inner">
      <Performance />
      <Citation />
    </div>
  </main>
);

export default Publications;

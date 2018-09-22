import React from 'react';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <section className="footer__site-map">
      <ul>
        <li>Services</li>
        <li>Proteomics</li>
        <li>High-throughput screening</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Protocols</li>
      </ul>
      <ul>
        <li>About</li>
        <li>Personnel</li>
        <li>Funding</li>
        <li>Contact us</li>
      </ul>
    </section>
    <small className="footer__copyright">
      © 2018 Network Biology Collaborative Centre, Lunenfeld-Tanenbaum Research Institute,
      Sinai Health System
    </small>
  </footer>
);

export default Footer;

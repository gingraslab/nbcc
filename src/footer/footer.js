import React from 'react';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <section className="footer__site-map">
      <ul>
        <li>Home</li>
      </ul>
      <ul>
        <li>Facilities</li>
        <li>High-content screening</li>
        <li>High-resolution imaging</li>
        <li>High-throughput screening</li>
        <li>Intregated data analysis</li>
        <li>Next-generation sequencing</li>
        <li>Proteomics</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Protocols</li>
        <li>Reagents</li>
        <li>Tech notes</li>
        <li>Workshops</li>
      </ul>
      <ul>
        <li>Publications</li>
        <li>How to cite</li>
      </ul>
      <ul>
        <li>News</li>
      </ul>
      <ul>
        <li>About</li>
        <li>Management</li>
        <li>Staff</li>
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

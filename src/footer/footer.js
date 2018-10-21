import React from 'react';
import { HashLink } from 'react-router-hash-link';

import RouterLink from '../components/router-link/router-link';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <section className="footer__site-map">
      <ul>
        <li><RouterLink to="/" type="link">Home</RouterLink></li>
      </ul>
      <ul>
        <li><RouterLink to="/facilities" type="link">Facilities</RouterLink></li>
        <li>
          <RouterLink to="/facilities/high-content-screening" type="link">High-Content Screening</RouterLink>
        </li>
        <li>
          <RouterLink to="/facilities/high-res-imaging" type="link">High-Resolution Imaging</RouterLink>
        </li>
        <li>
          <RouterLink to="/facilities/high-throughput-screening" type="link">High-Throughput Screening</RouterLink>
        </li>
        <li>
          <RouterLink to="/facilities/data-analysis" type="link">Intregated Data Analysis</RouterLink>
        </li>
        <li>
          <RouterLink to="/facilities/next-gen-sequencing" type="link">Next-Generation Sequencing</RouterLink>
        </li>
        <li>
          <RouterLink to="/facilities/proteomics" type="link">Proteomics</RouterLink>
        </li>
      </ul>
      <ul>
        <li><RouterLink to="/resources" type="link">Resources</RouterLink></li>
        <li><HashLink to="/resources#protocols">Protocols</HashLink></li>
        <li><HashLink to="/resources#reagents">Reagents</HashLink></li>
        <li><HashLink to="/resources#tech-notes">Tech notes</HashLink></li>
        <li><HashLink to="/resources#workshops">Workshops</HashLink></li>
      </ul>
      <ul>
        <li><RouterLink to="/publications" type="link">Publications</RouterLink></li>
        <li><HashLink to="/publications#cite">How to cite</HashLink></li>
      </ul>
      <ul>
        <li><RouterLink to="/news" type="link">News</RouterLink></li>
      </ul>
      <ul>
        <li><RouterLink to="/about" type="link">About</RouterLink></li>
        <li><HashLink to="/about#funding">Funding</HashLink></li>
        <li><HashLink to="/about#management">Management</HashLink></li>
        <li><HashLink to="/about#staff">Staff</HashLink></li>
        <li><HashLink to="/about#contact">Contact us</HashLink></li>
      </ul>
    </section>
    <small className="footer__copyright">
      © 2018 Network Biology Collaborative Centre, Lunenfeld-Tanenbaum Research Institute,
      Sinai Health System
    </small>
  </footer>
);

export default Footer;

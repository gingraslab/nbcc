import React from 'react';

import directors from './about__directors';
import divisionManagers from './about__division-managers';
import Envelope from '../assets/icons/envelope';
import managers from './about__centre-managers';

export const contactInfo = person => (
  <li key={person.name}>
    <span>{person.name}</span>
    <span>{person.title}</span>
    <span>{person.phone}</span>
    <span>{person.email}</span>
  </li>
);

const Contact = () => (
  <section
    className="about__contact"
    id="contact"
  >
    <h2>
      <Envelope />
      <span>Contact</span>
    </h2>
    <h3>Centre manager:</h3>
    <ul className="about__contact-list">
      { managers.map(contactInfo) }
    </ul>
    <h3>Directors:</h3>
    <ul className="about__contact-list">
      { directors.map(contactInfo) }
    </ul>
    <h3>Facility managers:</h3>
    <ul className="about__contact-list">
      { divisionManagers.map(contactInfo) }
    </ul>
    <h3>Mailing address:</h3>
    <address className="about__contact-mailing">
      <ul>
        <li>The Network Biology Collaborative Centre</li>
        <li>Sinai Health System</li>
        <li>600 University Avenue, Room 970</li>
        <li>Toronto, Ontario</li>
        <li>Canada</li>
        <li>M5G 1X5</li>
      </ul>
    </address>
    <aside>
      The website is designed and maintained by James Knight (jknight@lunenfeld.ca).
      Photography by Claire Laitinen.
      Logo design by Kaitlin Darbey.
    </aside>
  </section>
);

export default Contact;

import React from 'react';

import divisionManagers from './about__division-managers';
import Envelope from '../assets/icons/envelope';
import managers from './about__managers';

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
    <h3>Centre manager & directors:</h3>
    <ul className="about__contact-list">
      { managers.map(contactInfo) }
    </ul>
    <h3>Division managers:</h3>
    <ul className="about__contact-list">
      { divisionManagers.map(contactInfo) }
    </ul>
    <h3>Mailing address:</h3>
    <div className="about__contact-mailing">
      <div>The Network Biology Collaborative Centre</div>
      <div>Sinai Health System</div>
      <div>600 University Avenue, Room 970</div>
      <div>Toronto, Ontario</div>
      <div>Canada</div>
      <div>M5G 1X5</div>
    </div>
    <p>
      The website is designed and maintained by James Knight (jknight@lunenfeld.ca).
      Photography by X X.
      Logo design by Kaitlin Darbey.
    </p>
  </section>
);

export default Contact;

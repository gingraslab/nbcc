import React from 'react';

import LinkButton from '../components/link-button/link-button';

const Links = () => (
  <div className="about__links">
    <LinkButton
      href="#funding"
      text="Funding"
      type="secondary"
    />
    <LinkButton
      href="#management"
      text="Management"
      type="secondary"
    />
    <LinkButton
      href="#staff"
      text="Staff"
      type="secondary"
    />
    <LinkButton
      href="#contact"
      text="Contact"
      type="secondary"
    />
  </div>
);

export default Links;

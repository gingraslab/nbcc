import React from 'react';

import LinkButton from '../components/link-button/link-button';

const Links = () => (
  <div className="about__links">
    <LinkButton
      href="#funding"
      text="Funding"
      type="secondary-solid"
    />
    <LinkButton
      href="#management"
      text="Management"
      type="secondary-solid"
    />
    <LinkButton
      href="#staff"
      text="Staff"
      type="secondary-solid"
    />
    <LinkButton
      href="#contact"
      text="Contact"
      type="secondary-solid"
    />
  </div>
);

export default Links;

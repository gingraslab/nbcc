import React from 'react';

import LinkButton from '../components/link-button/link-button';

const Links = () => (
  <div className="resources__links">
    <LinkButton
      href="#reagents"
      text="Reagents"
      type="secondary-solid"
    />
    <LinkButton
      href="#tech-notes"
      text="Tech notes"
      type="secondary-solid"
    />
    <LinkButton
      href="#workshops"
      text="Workshops"
      type="secondary-solid"
    />
  </div>
);

export default Links;

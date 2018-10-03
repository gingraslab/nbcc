import React from 'react';

import Button from '../components/button/button';

const Links = () => (
  <div className="about__links">
    <a href="#funding">
      <Button type="secondary">
        Funding
      </Button>
    </a>
    <a href="#managment">
      <Button type="secondary">
        Management
      </Button>
    </a>
    <a href="#staff">
      <Button type="secondary">
        Staff
      </Button>
    </a>
    <a href="#contact">
      <Button type="secondary">
        Contact
      </Button>
    </a>
  </div>
);

export default Links;

import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Envelope from '../assets/icons/envelope';
import Link from '../components/router-link/router-link';

const Links = (links, contact) => {
  const linkArr = links.map((link) => {
    if (link.href) {
      return (
        <a
          className="navbar__link"
          href={link.route}
          key={link.text}
          {...link.props}
        >
          { link.text }
        </a>
      );
    }
    return (
      <Link
        className="navbar__link"
        key={link.text}
        to={link.route}
        type="link"
      >
        { link.text }
      </Link>
    );
  });
  if (contact) {
    linkArr.push(
      <HashLink
        className="navbar__link-contact"
        key="contact"
        to={contact}
      >
        <Envelope />
      </HashLink>,
    );
  }
  return linkArr;
};

export default Links;

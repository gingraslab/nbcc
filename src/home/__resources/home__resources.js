import React from 'react';

import File from '../../assets/icons/file';
import Link from '../../components/router-link/router-link';

import './home__resources.css';

const Resources = () => (
  <section className="home__section home__resources">
    <div className="home__section-inner">
      <h2>
        <File />
        Resources
      </h2>
      <div className="home__section-details home__resources-details">
        <div className="home__resources-buttons">
          <Link
            hash
            to="/resources#protocols"
            type="secondary-solid"
          >
            Protocols
          </Link>
          <Link
            hash
            to="/resources#reagents"
            type="secondary-solid"
          >
            Reagents
          </Link>
          <Link
            hash
            to="/resources#tech-notes"
            type="secondary-solid"
          >
            Tech notes
          </Link>
          <Link
            hash
            to="/resources#workshops"
            type="secondary-solid"
          >
            Workshops
          </Link>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque
        habitant morbi tristique senectus et netus et. Amet mauris commodo quis
        imperdiet massa tincidunt nunc. Enim sed faucibus turpis in eu mi. In
        tellus integer feugiat scelerisque varius. Habitant morbi tristique senectus
        et netus et. Elementum eu facilisis sed odio. Maecenas pharetra convallis
        posuere morbi. Sed nisi lacus sed viverra tellus. Molestie a iaculis at erat
        pellentesque adipiscing commodo elit. Pretium quam vulputate dignissim
        suspendisse in est. Phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien nec sagittis. Porttitor rhoncus dolor purus non enim
        praesent elementum. Fringilla phasellus faucibus scelerisque eleifend donec
        pretium vulputate. In massa tempor nec feugiat nisl pretium.
        </p>
      </div>
    </div>
  </section>
);

export default Resources;

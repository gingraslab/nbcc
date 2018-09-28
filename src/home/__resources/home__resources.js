import React from 'react';

import Button from '../../components/button/button';
import File from '../../assets/icons/file';

import './home__resources.css';

const Resources = () => (
  <div className="home__section home__resources">
    <section className="home__section-inner">
      <h2>
        <File />
        Resources
      </h2>
      <main className="home__section-details home__resources-details">
        <div className="home__resources-buttons">
          <Button type="secondary">
            Protocols
          </Button>
          <Button type="secondary">
            Reagents
          </Button>
          <Button type="secondary">
            Tech notes
          </Button>
          <Button type="secondary">
            Workshops
          </Button>
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
      </main>
    </section>
  </div>
);

export default Resources;

import React from 'react';

import Button from '../../components/button/button';
import Hospital from '../../assets/icons/hospital';
import Link from '../../components/router-link/router-link';

import './home__facilities.css';

const Facilities = () => (
  <div className="home__section home__facilities">
    <section className="home__section-inner">
      <h2>
        <Hospital />
        Facilities
      </h2>
      <main className="home__section-details home__facilities-details">
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
        <div className="home__facilities-buttons">
          <Link to="/facilities/proteomics">
            <Button>
              Proteomics
            </Button>
          </Link>
          <Button>
            High-throughput screening
          </Button>
          <Button>
            High-content screening
          </Button>
          <Button>
            High-spatio-temporal resolution imaging
          </Button>
          <Button>
            Integrative analysis
          </Button>
        </div>
      </main>
    </section>
  </div>
);

export default Facilities;

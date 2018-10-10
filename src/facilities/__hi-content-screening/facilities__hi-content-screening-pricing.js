import React from 'react';

import Dollar from '../../assets/icons/dollar';

const Pricing = () => (
  <section
    className="facilities__section facilities__pricing"
    id="pricing"
  >
    <div className="facilities__section-inner">
      <h2>
        <Dollar />
        Pricing
      </h2>
      <h3>
        <span>
          I. High-throughput imaging
        </span>
      </h3>
      <h3>
        <span>II. High-content analysis</span>
      </h3>
      <h3>
        <span>III. Policies</span>
      </h3>
      <h4>Equipment</h4>
      <p>
        Only trained user may use equipment in the High-Content Screening
        facility. New users should contact Misha Bashkurov for training or to
        process samples. After-hours use is permitted for experienced users.
      </p>
      <h4>Online booking</h4>
      <p>
        For experienced users, please book the microscopes using Google Calendar.
        Please contact us regarding login information. Other users, please contact
        Misha Bashkurov directly.
      </p>
      <h4>Data storage and management</h4>
      <p>
        Data may be temporarily stored on facility&apos;s computers and servers. All
        iles have to be moved to personal or lab storage after 2 months.
      </p>
      <h4>Bio-Safety</h4>
      <p>
        Users who plan to do live cell imaging experiments have to meet with the manager
        to discuss potential bio-safety risks and to ensure appropriate training. Users
        must be familiar with practices outlined in Laboratory Biosafety Guidelines
        (3rd edition, 2004, Public Health Agency of Canada-PHAC and enforced by the human
        pathogens and toxins act). The laboratory is containment level 2-certified.
      </p>
    </div>
  </section>
);

export default Pricing;

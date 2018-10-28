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
      <p>
        Our pricing is based on instrument usage, consumable costs and extended data
        analysis. Pricing is calculated on a per-project basis depending on the duration
        and complexity of the workplan. Users are provided with a cost estimate prior to
        project inception. For small-scale procedures, a typical standard price is $200/hr
        for instrument time with additional fees for consumables (at cost) and extended
        data analysis ($90/hour).
      </p>
    </div>
  </section>
);

export default Pricing;

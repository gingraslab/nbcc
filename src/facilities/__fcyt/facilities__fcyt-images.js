import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import GalleryImage from './facilities__fcyt-image';

const Images = ({
  handleClick,
  images,
  selected,
}) => (
  <Fragment>
    <div className="facilities__tsi-gallery-focus">
      <img
        alt={images[selected].alt}
        height={300}
        src={images[selected].list[0]}
        srcSet={`
          ${images[selected].list[0]} 1x,
          ${images[selected].list[1]} 2x,
          ${images[selected].list[2]} 3x
        `}
        width={300}
      />
    </div>
    <div className="facilities__tsi-gallery-list">
      {
        images.map((image, index) => (
          <GalleryImage
            handleClick={handleClick}
            image={image}
            index={index}
            key={image.alt}
          />
        ))
      }
    </div>
  </Fragment>
);

Images.propTypes = {
  handleClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.node),
    }),
  ).isRequired,
  selected: PropTypes.number.isRequired,
};

export default Images;

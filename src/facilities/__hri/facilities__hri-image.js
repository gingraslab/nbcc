import PropTypes from 'prop-types';
import React from 'react';

const Image = ({
  handleClick,
  image,
  index,
}) => {
  const onClick = () => {
    handleClick(index);
  };
  return (
    <button
      onClick={onClick}
      type="button"
    >
      <img
        alt={image.alt}
        height={150}
        src={image.list[0]}
        srcSet={`
          ${image.list[0]} 1x,
          ${image.list[1]} 2x,
          ${image.list[2]} 3x
        `}
        width={150}
      />
    </button>
  );
};

Image.propTypes = {
  handleClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.node),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Image;

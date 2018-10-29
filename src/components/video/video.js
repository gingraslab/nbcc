import PropTypes from 'prop-types';
import React from 'react';

const Video = ({
  src,
}) => (
  <video
    controls
    height="257"
    muted
    src={src}
    width="259"
  >
    Your browser does not support embedded videos.
  </video>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;

import React from 'react';

import ImageGallery from './facilities__fcyt-images-container';
import Images from '../../assets/icons/images';
import Video from '../../components/video/video';

import Movie1 from './assets/Mitosis_HelaTubGFPH2BRFPmovie1.mp4';
import Movie2 from './assets/Mitosis-HelaTubGFPH2BRFPmovie2.mp4';
import Movie3 from './assets/Mitosis-RPE1GFP12_R3D_D3D_PRJ.mp4';
import Movie4 from './assets/Mitosis-spindle_RPE1GFP14_R3D_D3D_P.mp4';

const Gallery = () => (
  <section
    className="facilities__section facilities__gallery"
    id="gallery"
  >
    <div className="facilities__section-inner">
      <h2>
        <Images />
        Gallery
      </h2>
      <h3>Images</h3>
      <ImageGallery />
      <h3>Movies</h3>
      <div className="facilities__hri-movies">
        <Video src={Movie1} />
        <Video src={Movie2} />
        <Video src={Movie3} />
        <Video src={Movie4} />
      </div>
    </div>
  </section>
);

export default Gallery;

// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const BackgroundImage = ({ images }) => (
  <div className='background-image-parent'>
    <div className='wrapper-gradient-effect'>
      <div className='parent-image-wrapper'>
        <img
          alt='The Penny Dreadful cast dressed as characters'
          className='source-image'
          src={images.Background}
        />
      </div>
    </div>
  </div>
);

BackgroundImage.defaultProps = {
  images: {}
};

BackgroundImage.propTypes = {
  images: T.object
};

export default BackgroundImage;

import React from 'react';

const BackgroundImage = ({ images }) => (
  <div className="background-image-parent">
    <div className="wrapper-gradient-effect">
      <div className="parent-image-wrapper">
        <img className="source-image" src={images.Background} />
      </div>
    </div>
  </div>
);

BackgroundImage.defaultProps = {
  images: {}
};

export default BackgroundImage;

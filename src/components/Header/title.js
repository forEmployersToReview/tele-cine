// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const SerieTitle = ({ title }) => (
  <div className='parent-serie-title'>
    <h1 className='serie-title'>{title}</h1>
  </div>
);

SerieTitle.defaultProps = {
  title: ''
};

// A thin layer of validation
// type checking helps keep the integrety
// of the property up and down the react tree.
SerieTitle.propTypes = {
  title: T.string
}

export default SerieTitle;
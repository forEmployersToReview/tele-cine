// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Synopsis = ({ synopsis }) => (
  <div className='synopsis-wrapper'>
    <h3 className='synopsis-title'>Sinopse</h3>
    <p className='synopsis-body'>{synopsis}</p>
  </div>
);

Synopsis.propTypes = {
  synopsis: T.string
}

export default Synopsis;

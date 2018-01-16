// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import SerieStats from './Stats';
import SerieTitle from './title';

const Wrapper = ({ title, stats }) => (
  <div className='title-wrapper'>
    <SerieTitle title={title} />
    <SerieStats stats={stats} />
  </div>
);

Wrapper.defaultProps = {
  title: '',
  year: null,
  stats: []
};

Wrapper.propTypes = {
  title: T.string,
  year: T.number,
  stats: T.arrayOf(T.object)
};

export default Wrapper;

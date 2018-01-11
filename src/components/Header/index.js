import React from 'react';
import { PropTypes as T } from 'prop-types';
import SerieStats from './stats';
import SerieTitle from './title';

const Wrapper = ({ title, year, genres }) => (
  <div className="title-wrapper">
    <SerieTitle title={title} />
    <SerieStats year={year} genres={genres} />
  </div>
);

Wrapper.defaultProps = {
  title: '',
  year: null,
  genres: []
};

Wrapper.propTypes = {
  title: T.string,
  year: T.number,
  genres: T.arrayOf(T.object)
};

export default Wrapper;

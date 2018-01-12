import React from 'react';
import { PropTypes as T } from 'prop-types';
import Tabs from './Tabs'
import Content from './Content'
import './index.css';

const Wrapper = ({ title, year, genres }) => (
  <div className="serie-detailed-content">
    <Tabs />
    <Content />
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

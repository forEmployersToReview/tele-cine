import React from 'react';
import { PropTypes as T } from 'prop-types';


const StatsNode = ({ value, ID }) => (
  <li className="stats-genre-item" key={ID}>
    {value}
  </li>
);

export default StatsNode;

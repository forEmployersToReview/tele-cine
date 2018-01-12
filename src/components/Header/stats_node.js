import React from 'react';

const StatsNode = ({ value, ID }) => (
  <li className="stats-genre-item" key={ID}>
    {value}
  </li>
);

export default StatsNode;

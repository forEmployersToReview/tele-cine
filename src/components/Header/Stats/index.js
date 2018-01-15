import React from 'react';
import StatsList from './stats_list';

const SerieStats = props => {
  return (
    <ul className="stats-genre-list">
      <StatsList {...props} />
    </ul>
  );
};

export default SerieStats;

import React from 'react';
import StatsList from './stats_list';

const SerieStats = props => {
  return (
    <div className="parent-serie-stats">
      <ul className="stats-genre-list">
        <StatsList {...props} />
      </ul>
    </div>
  );
};

export default SerieStats;

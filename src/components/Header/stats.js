import React from 'react';
import { PropTypes as T } from 'prop-types';
import StatsList from './stats_list';

const SerieStats = props => {
  return (
    <div className="parent-serie-stats">
      <StatsList {...props} />
    </div>
  );
};

export default SerieStats;

// Modules
import React from 'react';

import EpisodeBar from './episode_bar';
import EpisodeDetailed from './episode_detailed';

const Episode = props => {
  const { EpisodeNumber, Title, handle_episode_expand } = props;
  return (
    <div className="episode-wrapper">
      <EpisodeBar
        number={EpisodeNumber}
        title={Title}
        handle_episode_expand={handle_episode_expand}
      />
      <EpisodeDetailed {...props} />
      <hr className="vertical-separator" />
    </div>
  );
};

export default Episode;

// Modules
import React from 'react';

// Components
import Icon from '../../Icon';

const EpisodeBar = ({ title, number, handle_episode_expand }) => (
  <div className='bar-wrapper' onClick={() => handle_episode_expand(number)}>
    <div className='bar-left'>
      <p className='bar-number'>{number}</p>
      <p className='bar-title'>{title}</p>
    </div>
    <Icon icon='play_arrow' target_class='play-episode' />
  </div>
);


export default EpisodeBar;
// Modules
import React from 'react';
import { isEqual } from 'lodash';

// Components
import Icon from '../../Icon';

// Helper
import { format_duration } from '../../../containers/helper';

const EpisodeDetailed = ({
  Image,
  Synopsis,
  EpisodeNumber,
  episode_selected,
  handle_episode_expand,
  toggle_play_ui,
  button_class,
  Duration
}) => {
  if (isEqual(EpisodeNumber, episode_selected)) {
    return (
      <div onClick={handle_episode_expand} className='episode-details-root'>
        <div
          className='image-with-duration'
          onMouseLeave={() => toggle_play_ui('')}
        >
          <img
            alt='Place description in here' 
            className={`episode-detail-image ${button_class}`}
            src={Image}
            onMouseEnter={() => toggle_play_ui('play-on-image-hover')}
          />
          <Icon
            icon='play_arrow'
            target_class={`play-episode play-on-image ${button_class}`}
            onMouseEnter={() => toggle_play_ui('play-on-image-hover')}
          />
          <p className='episode-duration'>{format_duration(Duration)}</p>
        </div>
        <p className='episode-detail-synopsis'>{Synopsis}</p>
      </div>
    );
  }

  return null;
};

export default EpisodeDetailed;

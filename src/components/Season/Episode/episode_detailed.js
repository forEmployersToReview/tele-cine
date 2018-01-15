// Modules
import React from 'react';
import { isEqual } from 'lodash';

// Components
import Icon from '../../Icon';

// Helper FN
const format_duration = duration => {
  let hour = duration,
    minute = duration;
  if (duration > 59) {
    hour = Math.ceil(duration / 60);
    minute = Math.ceil(duration % 60);
    return `${hour}h ${!!minute ? `${minute}min` : '' }`;
  }
  return `${minute}min`;
};

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
      <div onClick={handle_episode_expand} className="episode-details-root">
        <div
          className="image-with-duration"
          onMouseLeave={() => toggle_play_ui('')}
        >
          <img
            className={`episode-detail-image ${button_class}`}
            src={Image}
            onMouseEnter={() => toggle_play_ui('play-on-image-hover')}
          />
          <Icon
            icon={'play_arrow'}
            target_class={`play-episode play-on-image ${button_class}`}
            onMouseEnter={() => toggle_play_ui('play-on-image-hover')}
          />
          <p className="episode-duration">{format_duration(Duration)}</p>
        </div>
        <p className="episode-detail-synopsis">{Synopsis}</p>
      </div>
    );
  }

  return null;
};

export default EpisodeDetailed;

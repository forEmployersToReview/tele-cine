// Modules
import React from 'react';

// Components
import Episode from '../Episode';

const Episodes = ({
  episodes,
  button_class,
  handle_episode_expand,
  episode_selected,
  toggle_play_ui
}) => {
  return (
    <div className="episodes-wrapper">
      {episodes.map(episode => (
        <Episode
          {...episode}
          key={episode.ID}
          episode_selected={episode_selected}
          toggle_play_ui={toggle_play_ui}
          handle_episode_expand={handle_episode_expand}
          button_class={button_class}
        />
      ))}
    </div>
  );
};

Episodes.defaultProps = {
  episodes: []
};
export default Episodes;

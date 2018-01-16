// Modules
import React from 'react';

// Components
import Tabs from '../Tabs';
import Icon from '../Icon';
import Episodes from './Episodes';

// `Season` is the perfect example of what the use of Redux would improve in the app.
// There is absolutely no reason to keep state of season_number and seasons upstream.
// What is keeping state upstream at the moment is that the mounting of the react component
// triggers the API call to fetch the serie content.

// To start off the api call has to be handled by the server and piped to the client for security and performance reasons.
// Once the data is fetched and stored in the global redux store, we can pull the necessary content
// at any layer of the application. I'd suggest still keep the container directory for a better
// separation of concerns between dummy/smart components. But also to keep at it's lowest possible component
// to avoid passing unnecessary properties back and forth.

// Season now is set as a dummy component and everything is handled by the parent component.

const Season = ({
  episodes,
  handle_season_switch,
  episode_selected,
  season_selected,
  handle_episode_expand,
  toggle_play_ui,
  button_class,
  temps
}) => (
  <div className='season-wrapper'>
    <div>
      <div className='season-head'>
        <div
          className='season-tab-wrapper'
          onClick={() => handle_episode_expand()}
        >
          <Tabs
            tab_item='season-title'
            tab_list='season-list'
            menu={temps}
            handle_tab={handle_season_switch}
            selected_tab={season_selected}
          />
        </div>
        <Icon icon='close' target_class='close-button' />
      </div>
      <Episodes
        episodes={episodes}
        episode_selected={episode_selected}
        handle_episode_expand={handle_episode_expand}
        toggle_play_ui={toggle_play_ui}
        button_class={button_class}
      />
    </div>
  </div>
);

export default Season;

// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Helper
import { scroll } from '../../../containers/helper';

// Components
import Artist from './artist';
import Icon from '../../Icon';

const Cast = ({ cast }) => (
  <div className='cast-container'>
    <Icon
      handle_icon={() => scroll(0, 'cast-section')}
      icon={'keyboard_arrow_left'}
      target_class='arrows'
    />
    <div id='cast-section' className='cast-section'>
      {cast.map((actor, index) => <Artist key={actor.ID} {...actor} />)}
    </div>
    <Icon
      handle_icon={() => scroll(1, 'cast-section')}
      icon='keyboard_arrow_right'
      target_class='arrows'
    />
  </div>
);

Cast.propTypes = {
  cast: T.array
};

export default Cast;

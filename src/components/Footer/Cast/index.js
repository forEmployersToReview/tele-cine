// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import Artist from './artist';
import Icon from '../../Icon';

const Cast = ({ cast }) => (
  <div className="cast-container">
    <Icon icon={'keyboard_arrow_left'} target_class={'arrows'} />
    <div className="cast-section">
      {cast.map((actor, index) => <Artist key={actor.ID} {...actor} />)}
    </div>
    <Icon icon={'keyboard_arrow_right'} target_class={'arrows'} />
  </div>
);

Cast.propTypes = {
  cast: T.array
};

export default Cast;

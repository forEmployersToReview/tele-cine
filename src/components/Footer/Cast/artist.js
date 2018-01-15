// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Artist = ({ Photo, Character, Name, custom }) => {
  // I made a custom view for Cast with the given data from the API
  // along with another call to an external movie/series api.
  // swapp custom to true on the component above to see
  // <Artist ... ... ... custom />

  if (custom) {
    return (
      <div className="artist-wrapper">
        <img className="artist-photo" src={Photo} />
        <p className="artist-charname">{Character}</p>
        <p className="artist-name">{Name}</p>
      </div>
    );
  }

  return (
    <div className="artist-default">
      <p className="artist-charname">{Character}</p>
      <p className="artist-name">{Name}</p>
    </div>
  );
};

Artist.propTypes = {
  photo: T.string,
  artist: T.string,
  char_name: T.string
};

export default Artist;

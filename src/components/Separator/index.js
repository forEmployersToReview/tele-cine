// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// A separator_type can be / or \ or | or *, you get the point any key you'd like, even another component would fit well for this case. 
// `/` is the fallback.
// index can be used for a case where Separator is part of a iteration of some kind.

const Separator = ({ index, separator_type, target_class }) => (
  <span key={`separator-${index}`} className={`separator ${target_class}`}>
    {separator_type}
  </span>
);

Separator.defaultProps = {
  separator_type: '/'
}

Separator.propTypes = {
  index: T.string,
  separator_type: T.string,
  target_class: T.string
}

export default Separator;

import React from 'react';
// A separatorType can be / or \ or | or *, you get the point. `/` is the fallback.
// index can be used for a case where Separator is part of a iteration of kind.

const Separator = ({ index, separatorType, target_class }) => (
  <span key={`separator-${index}`} className={`separator ${target_class}`}>
    {separatorType}
  </span>
);

Separator.defaultProps = {
  separatorType: '/'
}

export default Separator;
// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Icon = ({ handle_icon, icon, target_class, id }) => (
  <i id={id} className={`material-icons ${target_class}`} onClick={handle_icon}>
    {icon}
  </i>
);

Icon.propTypes = {
  handle_icon: T.func,
  icon: T.string,
  target_class: T.string,
  id: T.string
};

export default Icon;

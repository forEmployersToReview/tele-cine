import React from 'react';
import { isEqual } from 'lodash';
import { PropTypes as T } from 'prop-types';
// The opportunity for a custom class is given to elements in here with a fallback conditioned.
const determine_tab_selection = (default_class, tab, index) =>
  `${default_class} tab-title ${isEqual(tab, index) ? 'tab-selected' : ''}`;

const Tabs = ({
  menu,
  tab_item,
  tab_list,
  tab_wrapper,
  handle_tab,
  selected_tab
}) => (
  <ul className={tab_list || 'serie-footer-nav-list'}>
    {menu.map((item, index) => (
      <li
        className={determine_tab_selection(tab_item, selected_tab, index + 1)}
        key={`${item}-${index}`}
        onClick={() => handle_tab(index + 1)}
      >
        {item}
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  handle_tab: T.func.isRequired
};

export default Tabs;

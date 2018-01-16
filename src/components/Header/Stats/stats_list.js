// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import StatsNode from './stats_node';
import Separator from '../../Separator/index';

// Although a unique id for each genre is provided by the fetched packet.
// it's generally a good practice to not use the current index of a mapped item as the unique identifier for an element.
// For more see: https://reactjs.org/docs/lists-and-keys.html#keys

// List will include a separator prior to each genre property.
const StatsList = ({ stats }) =>
  stats.reduce((elements, { ID, Title }, index) => {
    if (index < stats.length - 1) {
      elements.push(
        <StatsNode
          key={ID}
          value={Title.toUpperCase()} />,
        <StatsNode
          key={`separator-${index}`}
          value={<Separator index={ID} />}
        />
      );
      return elements;
    }

    elements.push(<StatsNode key={ID} value={Title.toUpperCase()} />);

    return elements;
  }, []);

StatsList.propTypes = {
  stats: T.arrayOf(T.object)
};
export default StatsList;

import React from 'react';
import { PropTypes as T } from 'prop-types';

// When working with react:
// Although a unique id for each genre is provided by the fetched packet.
// it's generally a good practice to not use the current index of a mapped item as the unique identifier for an element.
// For more see: https://reactjs.org/docs/lists-and-keys.html#keys

const Separator = ({ index }) => (
  <span key={`separator-${index}`} className="separator">|</span>
);

const StatsList = ({ genres, year }) => {
  const yearNode = (
    <li key="first-static-index" className="stats-genre-item">
      {year}
    </li>
  );

  const list = genres.reduce(
    (elems, { ID, Title }, index) => {
      if (index < genres.length) {
        elems.push(<Separator index={index} />);
      }

      elems.push(
        <li className="stats-genre-item" key={ID}>
          {Title}
        </li>
      );

      return elems;
    },
    [yearNode]
  );

  return (
    <ul className="stats-genre-list">{list}</ul>
  );
};

StatsList.defaultProps = {
  year: null,
  genres: []
};

// A thin layer of validation
// type checking helps keep the integrety
// of the property up and down the react tree.
StatsList.propTypes = {
  year: T.number,
  genres: T.arrayOf(T.object)
};

export default StatsList;

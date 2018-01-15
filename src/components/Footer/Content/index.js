import React from 'react';
import General from '../General/';
import Cast from '../Cast/';
import Awards from '../Awards/';

// Render selected upstream content index.
const Content = props => (
  <div>
    {
      [
        <General {...props} />,
        <Cast {...props} />,
        <Awards {...props} />
      ][
        props.content - 1
      ]
    }
  </div>
);

export default Content;

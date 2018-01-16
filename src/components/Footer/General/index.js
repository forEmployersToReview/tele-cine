// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import Actions from './actions';
import Synopsis from './synopsis';

const FooterGeneral = props => (
  <div className='footer-general-info'>
    <Actions />
    <Synopsis {...props} />
  </div>
);

FooterGeneral.propTypes = {
  synopsis: T.string
};

export default FooterGeneral;

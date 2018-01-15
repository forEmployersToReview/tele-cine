import React from 'react';
import Actions from './actions';
import Synopsis from './synopsis';

const FooterGeneral = ({ synopsis }) => (
  <div className="footer-general-info">
    <Actions />
    <Synopsis synopsis={synopsis} />
  </div>
);

export default FooterGeneral;

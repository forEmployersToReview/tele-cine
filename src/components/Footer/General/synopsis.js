import React from 'react';

const Synopsis = ({ synopsis }) => (
  <div className="synopsis-wrapper">
    <h3 className="synopsis-title">Sinopse</h3>
    <p className="synopsis-body">{synopsis}</p>
  </div>
);

export default Synopsis;

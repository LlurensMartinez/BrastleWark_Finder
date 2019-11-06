import React from 'react';
import { Link } from 'react-router-dom';

import './noMatch.css';

const NoMatch = () => {

  return (
    <div className="noMatch">
      <h2>Ups!</h2>
      <i className="material-icons">sentiment_very_dissatisfied</i>
      <h3>Something goes wrong</h3>
      <Link to="/">Go back</Link>
    </div>
  );

}

export default NoMatch;
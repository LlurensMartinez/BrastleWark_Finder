import React from 'react';
import { Link } from 'react-router-dom'

// import './noMatch.css';

const NoMatch = () => {

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>Ups! Something goes wrong</h1>
    </div>
  );

}

export default NoMatch;
import React from 'react';
import { Link } from 'react-router-dom';

const GnomeCard = ({gnome}) => {

  return (
    <div>
      <img src={gnome.thumbnail} alt={gnome.name}/>
      <p>Name: {gnome.name}</p>
      <p>Age: {gnome.age}</p>
      <p>Weight: {gnome.weight.toFixed(2)} Kg</p>
      <Link to={`/details/${gnome.id}`}>Details</Link>
    </div>
  );
};

export default GnomeCard;
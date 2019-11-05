import React from 'react';
import { Link } from 'react-router-dom';
import './gnomeCard.css';

const GnomeCard = ({gnome}) => {

  return (
    <div className="cardContainer">
      <img src={gnome.thumbnail} alt={gnome.name}/>
      <h2>{gnome.name}</h2>
      <p><span>Age </span>   {gnome.age} Y</p>
      <p><span>Weight </span>   {gnome.weight.toFixed(2)} Kg</p>
      <Link to={`/details/${gnome.id}`}><i className="material-icons">info_outline</i></Link>
    </div>
  );
};

export default GnomeCard;
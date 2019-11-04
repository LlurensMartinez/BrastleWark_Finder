import React from 'react';


const GnomeCard = ({gnome}) => {

  return (
    <div>
      <img src={gnome.thumbnail} alt={gnome.name}/>
      <p>Name: {gnome.name}</p>
      <p>Age: {gnome.age}</p>
      <p>Weight: {gnome.weight.toFixed(2)} Kg</p>
      <a href="!#">Details</a>
    </div>
  );
};

export default GnomeCard;
import React from 'react';
import GnomeCard from '../GnomeCard/GnomeCard'
import './listCards.css';

const ListCards = ({gnomes, data}) => {

  const render = gnomes ? gnomes : data
  
  return (
    <div className="cardsWrapped">
      {
      render.map(gnome =>(
        <GnomeCard 
            key={gnome.id}
            gnome={gnome}
        />
      ))
    }
    </div>
  );
};

export default ListCards;
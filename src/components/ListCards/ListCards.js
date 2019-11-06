import React from 'react';
import GnomeCard from '../GnomeCard/GnomeCard'
import './listCards.css';

const ListCards = ({gnomes, data}) => {

  const render = gnomes ? gnomes : data

  return (
    <div className="cardsWrapped">
      {
      render.length !== 0 ?
      render.map(gnome =>(
        <GnomeCard 
            key={gnome.id}
            gnome={gnome}
        />
      ))
      :
      <p>No results for your search</p>
    }
    </div>
  );
};

export default ListCards;
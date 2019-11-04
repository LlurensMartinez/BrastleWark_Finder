import React from 'react';
import GnomeCard from './GnomeCard'

const ListCards = ({gnomes, data}) => {

  const render = gnomes ? gnomes : data
  return (
    <div>
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
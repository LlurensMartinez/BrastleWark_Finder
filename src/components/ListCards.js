import React from 'react';
import GnomeCard from './GnomeCard'

const ListCards = ({gnomes}) => {
  return (
    <div>
      {gnomes.map(gnome =>(
        <GnomeCard 
            key={gnome.id}
            gnome={gnome}
        />
      ))}
    </div>
  );
};

export default ListCards;
import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';

const GnomeDetails = () => {

  let { id } = useParams();
  const [data, loading] = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

   const filterGnome = () =>{
      const filterGnome = data.Brastlewark.filter(d => d.id === parseInt(id));
      const filterFriends = filterGnome[0].friends.map((friend, index) => <p key={index}>{friend}</p>)
      const filterProfession = filterGnome[0].professions.map((profession, index) => <p key={index}>{profession}</p>)

      return(
        <>
          <img src={filterGnome[0].thumbnail} alt=""/>
          <h2>{filterGnome[0].name}</h2>
          <p>Weight: {filterGnome[0].weight}</p>
          <p>Height: {filterGnome[0].height}</p>
          <p>Hair Color: {filterGnome[0].hair_color}</p>
          <p>Friends: </p>
          {filterFriends}
          <p>Professions: </p>
          {filterProfession}
        </>

      )
   }
  

  return (
    <div>
      { 
      loading ? (
        <div>Is loading....</div>
      ) : (
        filterGnome()
      )
     }
      
    </div>
  );
};

export default GnomeDetails;
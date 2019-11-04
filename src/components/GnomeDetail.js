import React from 'react';


const GnomeDetail = ({idParams, data, loading}) => {

  const filterGnome = () =>{
    const filterGnome = data.filter(d => d.id === parseInt(idParams));
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

export default GnomeDetail;
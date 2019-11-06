import React from 'react';
import { Link } from "react-router-dom";
import './gnomeDetail.css';


const GnomeDetail = ({idParams, data, loading, error}) => {

  const filterGnome = () =>{
    const filterGnome = data.filter(gnome => gnome.id === parseInt(idParams));
    const filterProfession = filterGnome[0].professions.map((profession, index) => <p key={index}>{profession}</p>);

    // Take info to link friends
    const filterFriend = filterGnome[0].friends.map(friends => data.filter(friend => friends === friend.name ));
  
    const filterLinkFriends = filterFriend.map(
          friend => <div key={friend[0].id} className="friendsContainer">    
                     <Link  to={`/details/${friend[0].id}`}>
                          <img src={friend[0].thumbnail} alt={friend[0].name}/>
                          <p>{friend[0].name}</p>
                      </Link>
                    </div>)

    return(
      <div className="cardDetailsContainer">
        <img src={filterGnome[0].thumbnail} alt=""/>
        <h2>{filterGnome[0].name}</h2>
        <div className="infoGnome">
          <p><span>Weight</span> {filterGnome[0].weight.toFixed(2)} Kg</p>
          <p><span>Height</span> {filterGnome[0].height.toFixed(2)} cm</p>
          <p><span>Hair Color</span> {filterGnome[0].hair_color}</p>
        </div>
        <h3><span>Friends</span></h3>
        <div className="friendsProfessions">
          {filterLinkFriends.length === 0 ? <p>Unknown</p> : filterLinkFriends}
        </div>
        <h3><span>Professions</span></h3>
        <div className="friendsProfessions">
          {filterProfession.length === 0 ? <p>Unknown</p> : filterProfession}
        </div>
        <Link className="goBack" to={"/"}><i className="material-icons">arrow_back</i>GO BACK!</Link>
      </div>

    )
 }
  return (
    <>
      {
      error.status ?
      <p>{error.messaage}</p>
      :
      loading ? (
        <div className="loadingCenter">
          <div className="lds-hourglass"></div>
        </div>
      ) : (
        filterGnome()
      )
     }
    </>
  );
};

export default GnomeDetail;
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import ListCards from '../components/ListCards/ListCards';


const Home = () => {
 
  const [data, loading, error] = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
  const [filter, setFilter] = useState();

  
  const updateSearch = (searchData)  => {
    let filtered;
    searchData !== '' ?  
       filtered = data.Brastlewark.filter((gnomes) => {
         return gnomes.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
       }) : 
       filtered = data.Brastlewark;
       setFilter(filtered);
  }


  return (
    <>
      <Header />
      <SearchBar 
        searchData={updateSearch}
      />
      
      { 
      loading ? (
        <div className="loadingCenter">
          <div className="lds-hourglass"></div>
        </div>
      ) : (
        <ListCards 
          data = {data.Brastlewark}
          gnomes= {filter}
        />
      )
     }
     </>
  );
};

export default Home;
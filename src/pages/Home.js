import React from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import ListCards from '../components/ListCards';


const Home = () => {
 
  const [data, loading] = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  return (
    <>
      <Header 
        title= "Brastlewark"
      />
      
      { 
      loading ? (
        <div>Is loading....</div>
      ) : (
        <ListCards 
          gnomes= {data.Brastlewark}
        />
      )
     }
     </>
  );
};

export default Home;
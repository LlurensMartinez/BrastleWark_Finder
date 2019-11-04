import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ListCards from '../components/ListCards';

function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [ gnomes, setGnomes ] = useState({});
 

  useEffect(() => {

    const consultAPI = async () => {
      setIsLoading(true);

      let url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  
      // consultar la URL
      const resp = await fetch(url);
      const resApi = await resp.json();

      setGnomes(resApi);
      setIsLoading(false);
    }


    consultAPI();
  }, [ ]) // si hay un cambio en ciudad o pais se vuelve a llamar a la Api

  return (
    <>
      <Header 
        title= "Brastlewark"
      />
      
     { 
      isLoading ? (
        <div>Is loading....</div>
      ) : (
        <ListCards 
          gnomes= {gnomes.Brastlewark}
        />
      )
     }
     </>
  );
};

export default Home;
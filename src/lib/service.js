import React from 'react';
import useFetch from 'react-hook-usefetch';

class GnomeService {
  
  getData = () => {
    const {data, loading, error} = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json", {});
    if (error.status) return <li><p>Error: {error.message}</p></li>;
    if (loading) return (<div className="loadingCenter">
                            <div className="lds-hourglass"></div>
                        </div>)
    if (data.Brastlewark) return data.Brastlewark;
  }

}

const gnomeService = new GnomeService();
export default gnomeService;
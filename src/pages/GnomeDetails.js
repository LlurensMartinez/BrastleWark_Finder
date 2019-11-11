import React from 'react';
import useFetch from 'react-hook-usefetch';
import { useParams } from "react-router-dom";
import GnomeDetail from '../components/GnomeDetail/GnomeDetail';

const GnomeDetails = () => {

  let { id } = useParams();
  const {data, loading, error} = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  const getData = () => {
    if (error.status) return <li><p>Error: {error.message}</p></li>;
    if (loading) return (<div className="loadingCenter">
                            <div className="lds-hourglass"></div>
                        </div>)
    if (data.Brastlewark) return (<GnomeDetail 
                                    idParams = {id}
                                    data = {data.Brastlewark}
                                  />)
  }

  return (<>{getData()}</>);
};

export default GnomeDetails;
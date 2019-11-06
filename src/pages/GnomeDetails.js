import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import GnomeDetail from '../components/GnomeDetail/GnomeDetail'

const GnomeDetails = () => {

  let { id } = useParams();
  const [data, loading, error] = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  return(
    <GnomeDetail 
      idParams = {id}
      data = {data.Brastlewark}
      loading = {loading}
      error = {error}
    />
  );
};

export default GnomeDetails;
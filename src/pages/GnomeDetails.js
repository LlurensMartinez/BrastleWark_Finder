import React from 'react';
import { useParams, Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import GnomeDetail from '../components/GnomeDetail'

const GnomeDetails = () => {

  let { id } = useParams();
  const [data, loading] = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  return(
  <>
    <Link to={"/"}>GO BACK!</Link>
    <GnomeDetail 
      idParams = {id}
      data = {data.Brastlewark}
      loading = {loading}
    />
  </>
  );
};

export default GnomeDetails;
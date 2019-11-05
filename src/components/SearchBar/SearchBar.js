import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({searchData}) => {
  
  const [search, setSearch] = useState("");
  

  const handleInput = (e) => {
    setSearch(e.target.value);
    // Pasara funcion en home para recoger el valor de state.search
    searchData(e.target.value);
    
  }

  return (
    <div className ="inputContainer">
       <input
         value={search}
         placeholder="Search"
         type="search"
         name="search"
         onChange={handleInput}
       />
    </div>
  );
};

export default SearchBar;
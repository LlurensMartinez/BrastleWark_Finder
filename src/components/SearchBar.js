import React, { useState } from 'react';

const SearchBar = ({searchData}) => {
  
  const [search, setSearch] = useState("");
  

  const handleInput = (e) => {
    setSearch(e.target.value);
    // Pasara funcion en home para recoger el valor de state.search
    searchData(e.target.value);
    
  }

  return (
    
       <input
         value={search}
         placeholder="Search for..."
         type="search"
         name="search"
         onChange={handleInput}
       />
  );
};

export default SearchBar;
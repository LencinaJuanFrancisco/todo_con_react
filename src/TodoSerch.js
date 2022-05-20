import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {
 

  const onSearcheValueChange = (e) =>{
  console.log(e.target.value);
    setSearchValue(e.target.value)
}

  return (
    <React.Fragment>
      <input onChange={onSearcheValueChange} 
             className="TodoSearch" 
             placeholder="Buscar ToDo"
             value={searchValue}
       />
       <p>{searchValue}</p>
     
  
  
    </React.Fragment>
  )
}
export  { TodoSearch }
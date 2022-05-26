import React, { useState } from 'react';
import './TodoSearch.css';
import {TodoContex} from "../TodoContext"

function TodoSearch() {
 const {searchValue,setSearchValue} = useState(TodoContex)

  const onSearcheValueChange = (e) =>{
  // console.log(e.target.value);
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
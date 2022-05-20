import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClicButton = (msg)=>{
    alert(msg)
  }
  return (
    <button className="CreateTodoButton"
    onClick={()=> onClicButton('aqui va el msh de mierda')}>
      +
    </button>
  );
}

export { CreateTodoButton};
import React from "react";
import { AppUI } from "./AppUI";
import{TodoProvider} from "../TodoContext/index"
// const defaultTodos=[
//   {text: 'cortar cebolla',completed:false},
//   {text: 'Lavar los platos',completed:true},
//   {text: 'Pasear al perro',completed:false},
//   {text: 'Aprender REACT',completed:true},
// ] 
//reempalazo esre array por lo que vamos a cear en el localSTorage

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>

    </TodoProvider>
  );
}

export default App;

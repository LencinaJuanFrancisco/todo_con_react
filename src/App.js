import React from "react";
import {TodoCounter} from "./TodoCouter";
import {TodoSearch} from "./TodoSerch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';
const todos=[
  {text: 'cortar cebolla',completed:false},
  {text: 'Lavar los platos',completed:false},
  {text: 'Pasear al perro',completed:false},
  {text: 'Aprender REACT',completed:false},
]
function App() {
  return (
    <React.Fragment>
     <TodoCounter/>
     <TodoSearch/>
     
     <TodoList>
       {todos.map(todo=>(

         <TodoItem key={todo.text} 
                    text={todo.text}  
                    completed={todo.completed}/>
       ))}
     </TodoList>
    <CreateTodoButton/>
    
    </React.Fragment>
  );
}

export default App;

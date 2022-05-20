import React,{useState} from "react";
import {TodoCounter} from "./TodoCouter";
import {TodoSearch} from "./TodoSerch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';
const defaultTodos=[
  {text: 'cortar cebolla',completed:false},
  {text: 'Lavar los platos',completed:true},
  {text: 'Pasear al perro',completed:false},
  {text: 'Aprender REACT',completed:true},
]


function App() {
  const [todos,setTodos] = useState(defaultTodos)
  const [searchValue,setSearchValue] = useState('')
  
  // filtramos para contar cuantas tareas tenemos realizadas
  const completedTodos = todos.filter(todo=> todo.completed == true).length
  // luego traemos ca natidad de todo
  const totalTodo = todos.length


  //vamos a crear un filtrado 
  let searchedTodos = []
  // verificamos si el unusuario ingreso algun valor en el input, si no ingresa nada, muestra todos los todos,
  // de lo contrario muestra lo que esta en el input 
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  }  else{
    //llamamos a nuestro array serchedTodos = []
    searchedTodos = todos.filter(todo =>{
      //llamamos a todos los elementos para pasarlo a minucula para poder compararlo
      const todoText = todo.text.toLowerCase()
      //modificamos 
      const searchText = searchValue.toLowerCase() // en searchText es lo que esta en el input
      //retornamos la comparacion 
      return todoText.includes(searchText);
    })
  }
  return (
    <React.Fragment>
     <TodoCounter
      total={totalTodo}
      completed={completedTodos}
     />
     <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
     />
     
     <TodoList>
       {searchedTodos.map(todo=>(

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

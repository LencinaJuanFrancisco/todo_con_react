import React from "react";
import {TodoCounter} from "../TodoCouter";
import {TodoSearch} from "../TodoSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo

}) {


    return (
    <React.Fragment>
     <TodoCounter
      total={totalTodos}
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
                    completed={todo.completed}
                    onComplete={()=>toggleCompleteTodo(todo.text)}
                    onDelete={()=>deleteTodo(todo.text)}
        />
       ))}
     </TodoList>

    <CreateTodoButton/>
     
    </React.Fragment>
    )
}

// utilizando solo export nos abligamos a utilizar el componente tal cual se exporta el nombre
// distinto es si tulizamos el export defaul
export { AppUI }
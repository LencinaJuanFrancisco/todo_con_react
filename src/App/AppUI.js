import React from "react";
import {TodoContex} from "../TodoContext"
import {TodoCounter} from "../TodoCouter";
import {TodoSearch} from "../TodoSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from '../CreateTodoButton';



function AppUI() {


    return (
    <React.Fragment>
     <TodoCounter/>
     <TodoSearch />
     

     <TodoContex.Consumer>
          {({error,
          loading,
          searchedTodos,
          toggleCompleteTodo,
          deleteTodo})=>(
              <TodoList>
              {error && <p>🧛‍♂️🧟‍♀️🧛‍♂️ ERROR 🧟‍♀️🧛‍♂️🧟‍♀️</p>}
              {loading && <p>Cargando...</p>}
              {(!loading && !searchedTodos.length) && <p> ¡¡¡ Crea tu primera tarea !!!</p>}
            {searchedTodos.map(todo=>(

              <TodoItem key={todo.text} 
                          text={todo.text}  
                          completed={todo.completed}
                          onComplete={()=>toggleCompleteTodo(todo.text)}
                          onDelete={()=>deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
            )
          }

     </TodoContex.Consumer>

    <CreateTodoButton/>
     
    </React.Fragment>
    )
}

// utilizando solo export nos abligamos a utilizar el componente tal cual se exporta el nombre
// distinto es si tulizamos el export defaul
export { AppUI }
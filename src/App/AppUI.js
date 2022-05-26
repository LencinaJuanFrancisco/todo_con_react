import React, { useContext } from "react";
import { TodoContex } from "../TodoContext"
import { TodoCounter } from "../TodoCouter";
import { TodoSearch } from "../TodoSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {TodoForm} from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'

function AppUI() {

  const { error, loading, searchedTodos, toggleCompleteTodo, deleteTodo ,openModal,setOpenModal} = useContext(TodoContex)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

// utilizando solo export nos abligamos a utilizar el componente tal cual se exporta el nombre
// distinto es si tulizamos el export defaul
export { AppUI }
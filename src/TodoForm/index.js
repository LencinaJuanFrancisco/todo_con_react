import React, { useContext, useState } from 'react'
import './ToDoForm.css'
import {TodoContex} from '../TodoContext'

function TodoForm() {
 const { addTodo,setOpenModal }=useContext(TodoContex)
 const [newTodoValue,setNewTodoValue] = useState('')

    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onSubmit=(e)=>{
       e.preventDefault();
       addTodo(newTodoValue)
       setOpenModal(false)
    }
    const onChange=(e)=>{
       setNewTodoValue(e.target.value)
    }


    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
export { TodoForm }
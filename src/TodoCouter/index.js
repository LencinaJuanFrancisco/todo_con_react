import React, { useContext } from "react";
import './TodoCounter.css'
import {TodoContex } from "../TodoContext"

function TodoCounter(){
    const{totalTodos,completedTodos} = useContext(TodoContex)
    return(
        <h2 className="titulo">Has completado {completedTodos} de  {totalTodos} TODOs</h2>
    )
}
// utilizando solo export {TodoCounter} estas obligando a utilizar el componente tal cual lo exportas
// asi de este modo no tendrias problemas en confundir los nombres
export {TodoCounter};
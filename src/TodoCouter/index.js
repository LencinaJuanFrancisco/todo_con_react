import React from "react";
import './TodoCounter.css'

function TodoCounter({completed,total}){
    return(
        <h2 className="titulo">Has completado {completed} de  {total} TODOs</h2>
    )
}
// utilizando solo export {TodoCounter} estas obligando a utilizar el componente tal cual lo exportas
// asi de este modo no tendrias problemas en confundir los nombres
export {TodoCounter};
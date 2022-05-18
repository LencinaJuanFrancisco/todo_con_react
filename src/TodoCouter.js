import React from "react";
function TodoCounter(){
    return(
        <h2>Has completado 2 de 3 TODOs</h2>
    )
}
// utilizando solo export {TodoCounter} estas obligando a utilizar el componente tal cual lo exportas
// asi de este modo no tendrias problemas en confundir los nombres
export {TodoCounter};
import React,{useState} from "react";
import { AppUI } from "./AppUI";
// const defaultTodos=[
//   {text: 'cortar cebolla',completed:false},
//   {text: 'Lavar los platos',completed:true},
//   {text: 'Pasear al perro',completed:false},
//   {text: 'Aprender REACT',completed:true},
// ] 
//reempalazo esre array por lo que vamos a cear en el localSTorage

//creamos nuestro propio react hook (custom HOOK)
function useLocalStorga(itemName,inicialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item,setItem] = useState(inicialValue)//antes teniamos defaulttodos[]
  //creamos el useEftect para conocer su funcionamiento, e incormoramos un setTimeout para indicarle en que momento renderizar, en este ejemplo luego de 2 seg, simulamos pare ver como funcionaria luego que cuando querramos conectar con una API
  React.useEffect(()=>{
    setTimeout(()=>{
      
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;//creamos una variable y se la pasamos a como valor inicial a nuestro UseState de todo
        
        //verificamos si hay algun elemento en el localSTorage 
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(inicialValue)) //creamos localStorage y se asignamos un array vacio,recordar que localStorage solo maneja string, por ese motivo lo pasamaos por stringify()
          parsedItem =inicialValue
          }else{
          parsedItem = JSON.parse(localStorageItem) // parceamos los datos xq localStorage solo almacena cadena de texto (STRING)
        }
        setItem(parsedItem)
        setLoading(false)

      } catch (error) {
        setError(error)
      }
      
    },2000);
 
  })
  
  
  
  const saveItem =(newItem)=>{
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName,stringifiedItem)
      setItem(newItem)// al estado hay que enviar el array sin modificar,el stringify()es solo para el localStorage
      
    } catch (error) {
      setError(error)
    }

  }
  // por convecion un hook tiene una array de 2 elemento, su valos y su funcion actualizadora, pero si tiene mas informacion debemos retornar o manejar la informacion como objeto {}
  return {
    item,
    saveItem,
    loading,
    error,
  }

}

function App() {
  const {
    item: todos, // con los : renombramos 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorga('TODOS_V1',[])
  const [searchValue,setSearchValue] = useState('')
  
  // filtramos para contar cuantas tareas tenemos realizadas
  const completedTodos = todos.filter(todo=> todo.completed === true).length
  // luego traemos ca natidad de todo
  const totalTodo = todos.length


  //vamos a crear un filtrado 
  let searchedTodos = []
  // verificamos si el uusuario ingreso algun valor en el input, si no ingresa nada, muestra todos los todos,
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



const toggleCompleteTodo = (text) =>{
  //buscamos en el array la posicion del elemento que queremos completar para marcarlo como completado por medio 
  // de un findIndex()
  const todoIndex = todos.findIndex(todo=> todo.text === text)
  //creamos una nueva lista de Todos(que es una compia de la lista que teniamos) para poder modificar , asi react actualiza el estado de los Todos
  const newTodos = [...todos];

  //luego antes de enviar el cambio , modificamos el todo que marcamos como completado, o si esta completado lo velvemos a pasar a false
	newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  //ahora si mandamos a actualizar el estado de los todos, con las modificaciones 
  
	saveTodos(newTodos);
}
 const deleteTodo = (text)=>{
   //buscamos en el array la posicion del elemento que queremos ELIMINAR 
  const todoIndex = todos.findIndex(todo=> todo.text === text)
  const newTodos=[...todos]
  newTodos.splice(todoIndex,1)
  saveTodos(newTodos)
 }

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodo}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    toggleCompleteTodo={toggleCompleteTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

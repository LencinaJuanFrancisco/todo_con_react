import React,{useState} from "react";

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
  export {useLocalStorga}

//Impporta iconos de react icons
import {VscArrowBoth} from 'react-icons/vsc'
//Vamos a crear un post con su funcion
//Fetch Api es lo que haremos 
export const Post = () => {
  return <button onClick={()=>{
    //Lo siguiente son pormesas en Java Script:
    fetch('https://jsonplaceholder.typicode.com/posts')
    //fetch sirve para recibir datos de fetch
    .then(response => response.json())
    //then  response es para respuesta del link convertirlo en .json
    .then(data=>console.log(data))
    //.then data es para mostrar los datos del link conevrtidos en 
    //la terminal
    .catch(error=>console.error('Muetrame el error por consola'))
    //En el caso que hubo una falla muestra esto
  }}>
        <VscArrowBoth/>
    Traer datos
  </button>

    
  
};

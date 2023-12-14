//Simepre en mayuscula las funciones

//prop-types 
import PropTypes from 'prop-types'
export function Buttom({text, name='Usuario'})
{
    console.log(text)
    if (!text){
        console.log("texto requerido");
    }
    return <button onClick={function () {

        console.log("Hola Mundo")
    }}>
        {text} - {name}

    </button>
}

Buttom.propTypes={
    text:PropTypes.string.isRequired
}
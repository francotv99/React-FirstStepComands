import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
//Aqui se importa funciones especificas de un archivo
import { Saludar, User, Greet, Data } from "./saludar";
//Aqui se importa todo lo de un archivo
import Product, { Navbar } from "./product";
import { Buttom } from "./Button";
import { TaskCard, TaskCard2 } from "./Task";
import { Post } from "./Posts";

//Comunicacion con el root de index.html
const rootElement = document.getElementById("root");
//Crea la variable root para añadir codigo al index.html
const root = ReactDOM.createRoot(rootElement);

//Lo importante es que al diseñar la pagina
//se debe dividir por partes: Tambien llamado componentes
//componentes como cabecera, footer, post, etc

//Ahora crearemos un componente:

//Cuando se habla de componentes en react son funciones:

//Unidcode para emojis

//Saludar () es la seccion reutilizable

// Creamos un arreglo:
const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/franco",
  },
  {
    id: 1,
    name: "Joe",
    image: "https://robohash.org/franco2",
  },
];

//Esta funcion sirce para hacer las sumas o restas de
//por medio de react (Hooks usando Usestate)
function Counter() {
  const [counter, setCounter] = useState(0);
 

  return (
    <section>
      {" "}
      useState
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Resta
      </button>
      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        1000
      </button>
    </section>
  );
}
//Esta funcion es la misma que la anterior pero
//para guardar mensajes (string)
function Mensaje() {
  const [Sms, setSms] = useState('');
  useEffect(()=>{
    console.log("render")
  },[]);//Ejecuta una vez el componente
  useEffect(()=>{
    console.log("render")
  },[Sms]);//Ejecuta una vez [pero en SMS]

  return (
    <div>
      <input onChange={e=>setSms(e.target.value)} />
      <button onClick={()=>{
        alert('El mensaje es:'+Sms)
      }}>Save</button>
    </div>
  );
}




root.render(
  <>
    <Saludar />
    <User />
    <Product />
    <Navbar />
    <Greet title="Hola mundo" name="Franco" />
    <Greet title="Hola Franco" name="Sebas" />
    <Greet title="Holitas" name="Torres" />
    <Data
      name="Franco Torres"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Antofagasta", city: "Sucre" }}
    />
    <Data
      name="Sebas Vidal"
      amount={4000}
      married={true}
      points={[44, 22.3, 0]}
      address={{ street: "1 Obrajes", city: "La Paz" }}
    />
    <Buttom text="Click Me" />
    <Buttom text="Pay" />
    <Buttom text="" name="Franco" />
    <TaskCard />
    <TaskCard2 ready={true} />
    <input
      onChange={function (e) {
        console.log(e.target.value);
      }}
    />
    formulario para envio y emojis
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviado");
        alert("Enviado");
      }}
    >
      <h1>regitro del formulario</h1>
      <button>submit</button>
    </form>
    <Post />
    <section>
      prueba de elemntos en react:
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <img src={user.image} />
          </div>
        );
      })}
    </section>
    Usando Use State:
    Use state para sumar-restar
    <Counter />
    Use state para String y guardar variable
    <Mensaje/>

  </>
);

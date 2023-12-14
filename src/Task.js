import './Task.css'
/*Task Card 
Sera la funcion para añadirle estilos
a la funcion y al html*/

/* Esta funcion tendr aun estilo en lina
smilar el css*/
export function TaskCard() {
  const CardStyle = { background: "#202020", color: "#fff", padding: "20px" };
  const titlestyle={fontWeigh: "Bonder"}
  return (
    <div style={CardStyle}>
      <h1 style={titlestyle}>Primera Tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
/*Esto generlamente sirve cuando 
se da una condicion de True or False 
para que asi directamente cmabien los colores
la otra forma es haciendo archivo de CSS */

//Aqui temos una funcion del cual se aplica usando 
//Archivo css Task.css
export function TaskCard2(props) {
 
    return (
      <div class="card">
        <h1 >Segunda tarea Tarea</h1>
        <span style={props.ready ? {background:'green'} : {background:'red'}}
        >{props.ready === true ? "Tarea lista con archivo css":"Tarea pendiente"}</span>
        <span class={props.ready ? 'bg-green':'bg-red'}>
            {props.ready === true ? "Tarea lista de otra froam de css":"Tarea pendiente 2.0"}</span>
      </div>
    );
  }
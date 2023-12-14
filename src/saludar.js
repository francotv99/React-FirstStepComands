export function Saludar() {
  const married = true;
  if (married) {
    return (
      <div>
        <h1>Hello!</h1>
        <p>Lorem 123 😀</p>
        <p>{10 + 10}</p>
      </div>
    );
  } else {
    return <h1>Hello!</h1>;
  }
  //Tambien sivre:

  /*return <h1>{
          married ? 'Estoy casado':'No estoy casado'        }</h1>*/
}

//Vamos  a crear otra funcion para tratar con objetos:
export function User() {
  return <h1>UserCard</h1>;
}
//Lo que hace esta funcion es usar props para
//usar el mismo componente pero que muestre diferente parametro
//de si mismo: toma encuenta el index.js
export function Greet(props) {
  console.log(props.title, props.name);
  return (
    <h1>
      {props.title}, {props.name}{" "}
    </h1>
  );
}
//Otra forma a lo anterior es:
/*/export function Greet({title}){

  return <h1>{title}</h1> 
 
}*/
//En base a la anterior funcion hagamos una lista:
export function Data(props) {
  console.log(props.name);
  return (
    <>
      <h1> {props.name} </h1>
      <p>${props.amount}</p>
      <p>{props.married ? "married" : "Single"}</p>
      <ul>
        <li>City:{props.address.city}</li>
        <li>Street:{props.address.street}</li>
      </ul>
    </>
  );
}

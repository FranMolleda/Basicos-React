import React from "react";
import "./carrito.css";
import Producto from "./Producto";

//En App.js pasamos como prop producto={producto}, al traernos aquí el componente <Producto/>, le decimos que la prop producto, aquí es {element} y así coge el mismo formato.
//Si en lugar de traer el componente y sus props, lo quisiesemos hacer por nuestra cuenta, sería algo así como: Return(<h2>{element.nombre}</h2>)
const Carrito = ({ carrito }) => {
  return (
    <div className="carrito">
      <h2>Tu carrito de Compras</h2>
      {carrito.length === 0 ? (
        <h4>El Carrito está vacío</h4>
      ) : (
        carrito.map((element, id) => {
          return <Producto key={id} producto={element} />;
        })
      )}
    </div>
  );
};

export default Carrito;

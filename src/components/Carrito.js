import React from "react";
import "./carrito.css";
import Producto from "./Producto";

//En App.js pasamos como prop producto={producto} al componente Producto, al traernos aquí el componente, le decimos que la prop producto, aquí es {element} y así coge el mismo formato.
//Si en lugar de traer el componente y sus props, lo quisiesemos hacer por nuestra cuenta, sería algo así como: Return(<h2>{element.nombre}</h2>)
//Para eliminar un elemento, devemos pasar al componente Producto la props carrito
const Carrito = ({ carrito, setCarrito }) => {
  return (
    <div className="carrito">
      <h2>Tu carrito de Compras</h2>
      {carrito.length === 0 ? (
        <h4>El Carrito está vacío</h4>
      ) : (
        carrito.map((element, id) => {
          return (
            <Producto
              key={id}
              producto={element}
              carrito={carrito}
              setCarrito={setCarrito}
            />
          );
        })
      )}
    </div>
  );
};

export default Carrito;

import React from "react";

const Producto = ({ productos }) => {
  const { nombre, precio, id } = productos;
  return (
    <>
      <h1>Desde producto</h1>
      <h3>El producto es: {nombre}</h3>
      <p>El Precio es: ${precio}</p>
    </>
  );
};

export default Producto;

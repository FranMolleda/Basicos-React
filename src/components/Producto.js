import React from "react";

const Producto = ({ productos }) => {
  const { nombre, precio, id } = productos;

  //Agregar producto al carrito
  const seleccionarProducto = (id) => {
    console.log("Comprando...", id);
  };

  return (
    <>
      <h1>Desde producto</h1>
      <h3>El producto es: {nombre}</h3>
      <p>El Precio es: ${precio}</p>
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Comprar
      </button>
    </>
  );
};

export default Producto;

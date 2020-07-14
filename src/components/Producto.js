import React from "react";

const Producto = ({ producto, productos, carrito, setCarrito }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  const seleccionarProducto = (id) => {
    console.log("Comprando...", id);
    const producto = productos.filter((producto) => producto.id === id)[0];
    //Para agregar elementos, utilizamos el setCarrito, haciendo una copia del carrito y como segundo parametro, indicamos producto que es lo que vamos a ir agregando cada vez que pulsemos el botón
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <h3>El producto es: {nombre}</h3>
      <p>El Precio es: ${precio}</p>
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Comprar
      </button>
    </>
  );
};

export default Producto;

import React from "react";

const Producto = ({ producto, productos, carrito, setCarrito }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  const seleccionarProducto = (id) => {
    console.log("Comprando...", id);
    const producto = productos.filter((producto) => producto.id === id)[0];
    setCarrito(carrito.push(producto));
    console.log(producto);
  };
  console.log(carrito);

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

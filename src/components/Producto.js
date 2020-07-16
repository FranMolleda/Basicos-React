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
  //Le decimos que a través de setCarrito, carrito se quede con los que no sean igual al id del que eliminamos
  const eliminarProducto = (id) => {
    const productos = carrito.filter((elemento) => elemento.id !== id);
    setCarrito(productos);
  };

  return (
    <>
      <h3>El producto es: {nombre}</h3>
      <p>El Precio es: ${precio}</p>
      {/* Indicamos si está en Lista de productos, el botón sea Comprar y si no (si está en el Carrito), sea eliminar */}
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </>
  );
};

export default Producto;

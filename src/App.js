import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa Node.JS", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);

  //State para carrito de Compra
  const [carrito, setCarrito] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de productos</h1>
      {productos.map((element, id) => {
        return (
          //Pasmos como props el carrito para manejarlo desde el componente porducto
          <Producto
            producto={element}
            productos={productos}
            key={id}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        );
      })}
      <Carrito carrito={carrito} setCarrito={setCarrito} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;

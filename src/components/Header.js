import React from "react";

function Header() {
  const edad = 16;

  let mensaje;

  //If se puede poner fuera de un return, no dentro. Para un condicional dentro de un return debemos usar un ternario
  if (edad >= 18) {
    mensaje = "Eres mayor de edad";
  } else {
    mensaje = "No eres mayor de edad";
  }

  return (
    <>
      <h1>Tienda Virtual </h1>
      <h3>{mensaje}</h3>
    </>
  );
}

export default Header;

import React from "react";

//Pasando props como propiedad
// function Header(props) {
//   return <h1>{props.titulo}</h1>;
// }

//La manera más actual de utilizar las props es con el destructuring:
function Header({ titulo }) {
  return <h1>{titulo}</h1>;
}

export default Header;

import React from "react";
//imr = import React from 'react';

// sfc  = const  = () => {
//     return (  );
// }

// export default ;

// const Footer = () => {
//   return (
//     <footer>
//       <p>Todos los derechos reservados &copy; </p>
//     </footer>
//   );
// };

//En function expresion, si no tenemos código js, sino que solo es un return podemos hacerlo de la siguiente manera:
//*Esto no se puede hacer con function declaration
const Footer = ({ fecha }) => (
  <footer>
    <p>Todos los derechos reservados &copy; {fecha}</p>
  </footer>
);

export default Footer;

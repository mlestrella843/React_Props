
// Se puede exportar indepemdiemte como por default.
//Aqui esta de forma independiente, en el encabezado de la funcion.
 
// export function App() {
//     return (<h1>Hola Mundo!!!! probando otra vez</h1>);
// }

//export default App;         //Esta espor defecto, lo cual se va entero donde la llamen.

import React from 'react'

export const HelloWorldApp = () => {
  return (
     <h1>Hello World App!!!!! </h1>
  )
}

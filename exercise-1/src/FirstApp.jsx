import React from 'react'

// //Variable con solo un mensaje
// const newMesage = "Hola Maria!!!!"

// //Variable tipo ibjeto
// const newMessage2 = {
//     message: "Estamos aprendiendo",
//     title: "Aprendiendo"
// }

// //Funcion que pide dos numeros y se ejecuta en el cuerpo del componente
// const getResult = (a,b) => {
//     return a + b;
// }

// export const FirstApp = () => {
//   return (
//     // Este simbolo <> hace la funcion de un Fragment, que evita tener que usar un div de mas.
//     // Funciona como un agrupador Padre de los demas elementos HTML
//     <> 
//         <h1>First App!!!</h1>
//         <h2>Operacion: {newMessage2.title}</h2>
//         <h2>Operacion: { getResult(1,23) }</h2>
//         <h3>Mi nombre es Maria</h3>
//         <p> Este es un subtitulo</p>
//    </>
//     // Aqui se cierra el Fragment
//   )

// }

// Aqui recibe la infromacion que vbiene del componenete padre desde el main.jsx

import PropTypes from 'prop-types';

export const FirstApp = ( { title, subtitle } ) => {
   // console.log( {title} );
   //Si se definen las propTypes ya no hay que validar de esta forma
//    if(!title){
//     throw new Error('El title no existe');
//    }

    return (
        <>    
            <h1>{ title }</h1>
            <p> { subtitle }</p>
        </>
    )
}

//El resultado se chequea en la consola del navegador, NO en la terminal integrada
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}

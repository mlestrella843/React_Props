import React from 'react'

const newMesage = "Hola Maria!!!!"

const newMessage2 = {
    message: "Estamos aprendiendo",
    title: "Aprendiendo"
}

export const FirstApp = () => {
  return (
    // Este simbolo <> hace la funcion de un Fragment, que evita tener que usar un div de mas.
    // Funciona como un agrupador Padre de los demas elementos HTML
    <> 
        <h1>First App!!!</h1>
        <h2>Operacion: {newMessage2.title}</h2>
        <h3>Mi nombre es Maria</h3>
        <p> Este es un subtitulo</p>
   </>
    // Aqui se cierra el Fragment
  )

}

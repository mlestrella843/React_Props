import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

//El valor value sera el que se definio en el componente padre que esta en el main.jsx
export const FirstHook = ( {value} ) => {

    //Definiendo el primer hook. counter le llame al valor que se recogera de la funcion-hook useState
    //counter es una variable que contendra el valor que devuelve la funcion-hook de useState.
    //El valor setCounter es el que nos permitira asignar otro valor a la variable counter.
    //Lo desestructuramos y colocamos en el arreglo, esta es la manera de hacerlo en React
    //y regularmente se le pone el mismo nombre que el valor pero con la palabra set por delante.

    const [ counter, setCounter ] = useState( value );

    const handleEvent = () => {
        //Aqui cambio el valor de counter con counter + 1
        //****    */ setCounter( counter + 1 );
        //Otra manera de hacerlo es, aqui al valor le llame c, pude llamarle de cualquier otra forma
        // y hara lo mismo. POrque el valor c recoge lo que envia la funcion useState, mientras con setCounter
        //puedo cambiar el valor de counter que aqui debajo le llame con el nombre de c.
        //Si lo quiero llamar elefante lo hago, al final no importa, pero por buenas practicas y para que 
        // el codigo sea legible esta es la manera.
        //****     */ setCounter( ( elefante ) => elefante + 1 );

        setCounter( (counter) => counter + 1 );


    }

    return (
    <>
        <h1>Use State Hook APP</h1>
        <h2> { counter } </h2>

        <button onClick={ handleEvent }>
                Clickea!
        </button>   
    </>
  )
}

FirstHook.propTypes = {
    value: PropTypes.number.isRequired
}

FirstHook.defaultProps = {
    value: 45  
}

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

//El valor value sera el que se definio en el componente padre que esta en el main.jsx
export const KeepHooking = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );

    // const handleAdd = () => {
    //     setCounter( (counter) => counter + 1 );
    // }
    // const handleSubtract = () => {
    //     setCounter( (counter) => counter - 1 );
    // }
    // const handleReset = () => {
    //     setCounter( (counter) => value );
    // }

    // Otra forma de hacerlo con menos codigo es 
    const handleAdd = () => {
        setCounter( counter + 1 );
    }
    const handleSubtract = () => {
        setCounter( counter - 1 );
    }
    const handleReset = () => {
        setCounter( value );
    }




    return (
    <>
        <h1>Use State Hook APP</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> + 1 </button>   
        <button onClick={ handleSubtract }> - 1 </button>   
        <button onClick={ handleReset }> Reset </button>   

    </>
  )
}

KeepHooking.propTypes = {
    value: PropTypes.number.isRequired
}

KeepHooking.defaultProps = {
    value: 45  
}

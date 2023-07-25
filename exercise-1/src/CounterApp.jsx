import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    const handleEvent = () => {
        console.log("Hola Maria");
    }

    return (
    <>
        <h1>Counter APP</h1>
        <h2> {value} </h2>

        <button onClick={ handleEvent }>
                Clickea!
        </button>   
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 45  
}

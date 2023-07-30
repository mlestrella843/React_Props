//Esto es solo un ejemplo 

import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar

//import { App } from './helloWorldApp'//Esta importada de manera independiente, por eso las llaves.
//import App from './helloWorldApp';
//import { HelloWorldApp } from './helloWorldApp'
import { FirstApp } from './FirstApp';
import './style.css';
//import { CounterApp } from './CounterApp';
//import { FirstHook } from './firstHook';
// import { KeepHooking } from './KeepHooking';

//Componente que regularmente nunca esta dentro de este archhivo

// function App() {
//     return (<h1>Hola Mundo</h1>);
// }

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <HelloWorldApp /> */}

        {/* Desde aqui estamos mandando informacion desde el componente padre hacia el hijo
        llamado FirstApp */}
        <FirstApp title="Maria" subtitle="Estoy probando"/>
        {/* <CounterApp  value={ 234 }/> */}
        {/* <FirstHook value={ 20 }/> */}
        
        {/* <KeepHooking value={ 20 }/> */}


    </React.StrictMode>
);
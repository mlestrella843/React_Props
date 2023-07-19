//Esto es solo un ejemplo 

import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar


//Componente que regularmente nunca esta dentro de este archhivo
function App() {
    return (<h1>Hola Mundo</h1>);
}

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
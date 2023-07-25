

test( 'Esta prueba no debe fallar', () => {
    if( 1 === 0){
        throw new Error(' NO puede dividir en cero');
    }
})
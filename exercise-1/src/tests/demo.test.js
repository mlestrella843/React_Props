
describe('Pruebas en <DemoComponent />', () => {

    test( 'Esta prueba no debe fallar', () => {

        //1.Arrange: Iniciaclizacion de variables
        const message1 = 'Hola Maria como estas';
    
        //2.Act: Estimulo
    
        const message2 = message1.trim();
    
        //3. Assert: Observar el comportamiento esperado.
        //Una manera de hacerlo
        expect( message1 ).toBe( message2 );
    
    });

});






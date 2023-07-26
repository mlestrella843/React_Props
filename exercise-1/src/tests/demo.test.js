
describe('Probando <DemoComponent />', () => {
  
    test('Esta prueba no debe fallar', () => {

       //1. Iniciaclizacion **** Arrange
       const message1 = 'Hola Mundo';


       //2. Estimulos ***** Act

       const message2 = message1.trim();

       //3. Observar el comportamiento esperado ***** Assert

        expect( message1 ).toBe(message2);

      
    });
    
});

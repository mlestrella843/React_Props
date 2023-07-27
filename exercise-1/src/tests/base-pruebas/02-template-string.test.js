import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en el archivo 02-template-string', () => {
  
    //El texto dentro es solo para identificar la prueba. Aqui se esta probando el nombre y el message.
    test('getSaludo debe retornar "Hola Maria Luisa" ', () => {
      
        const nombre = "Maria Luisa!!!";

        const message = getSaludo(nombre);

        expect( message ).toBe( `Hola ${nombre}`);

    });
    
});

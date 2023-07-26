import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en el archivo 02-template-string', () => {
  
    test('getSaludo debe retornar "Hola Maria Luisa (Este texto no se prueba)"', () => {
      
        const nombre = "Maria Luisa";

        const message = getSaludo(nombre);

        expect( message ).toBe( `Hola ${nombre}`);

    })
    


})

import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Prueba del archivo 07-deses-arr.js', () => {

    test('Esto probara la funcion que retorna un arreglo ', () => {

          //  const retorno = retornaArreglo();
        
          // desestructurando
            const [ letters, numbers ] = retornaArreglo(); 
        
            expect( letters ).toBe( 'ABC');
            expect( numbers ).toBe( 123 );

            //Ademas se puede evaluar un tipo de dato como por ejemplo
            expect( typeof letters).toBe('string')
            expect( typeof numbers).toBe('number')

    });
    
});

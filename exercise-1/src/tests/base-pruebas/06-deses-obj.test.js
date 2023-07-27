
import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Prueba de funcion con desestructuracion 06-deses', () => {
    test('Esto deberia arrojar el objeto ', () => {
        //Probando la funcion usContext, se importa desestructirando todos sus elementos.
        //Aqui se llenan las variables con valores
        const nombre = "Josefina";
        const clave = "12345";
        const rango = " ";
        const edad = 34;

        //Aqui se guarda el resultado de la funcion usContext con sus nuevos valores 
        //en la variuable contentUser
        const contentUser = usContext( { clave, nombre, edad, rango } );      
        expect( contentUser ).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
            
        });         
    }); 
});

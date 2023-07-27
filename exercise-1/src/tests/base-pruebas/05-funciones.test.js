import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);
        //Aqui se estan comparando dos objetos. Los objetos aunque literalmente tienen el mismo valor
        //Ocupan espacios de memoria diferentes. Usando el toEqual funciona perfectamente.
        expect(testUser).toEqual(user);   
    });  

    test('getUsuarioActivo debe retornar el objeto del usuario', () => {

        const name = "Julian Alvarez";
        const userActivo = getUsuarioActivo( name );

        //debo de ponerle el cuerpo del objeto completo
        expect( userActivo ).toStrictEqual({
            uid:'ABC567',
            username: (name)
        }); 
    });    
});

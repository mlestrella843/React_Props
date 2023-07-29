import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('Pruebas en 09-promesas.js', () => {

    test('getHeroeByIdAsync debe de retornar un heroe ', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }); 

                done();
            });
    
        });       

    // Segundo test

         test('getHeroeByIdAsync debe de retornar un error si heroe no existe ', (done) => {

            const id = 100;
            getHeroeByIdAsync( id)
                .catch(error => {

                     console.log(error);
                    expect( error ).toBe( `No se pudo encontrar el heroe ${ id }`)

                    done();
                });
        
        
            });


    });


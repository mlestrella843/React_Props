import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp.js', () => {

    //1. Primera prueba que compara los dos objetos por ID.
    test('getHeroeById debe retornar un heroe por ID ', () => {
        const id = 4;

        const heroe = getHeroeById( id );

        expect( heroe).toEqual( { id: 4, name: 'Flash', owner: 'DC' } );   
    });
    

     //2. Segunda prueba que 
     test('getHeroeById debe retornar undefined si no existe el ID ', () => {
        const id = 100;
        const heroe = getHeroeById( id );
       // console.log(heroe);

       //Una forma de evaluar si es undefined o nulo.
       //1.
       // expect( heroe ).toBe( undefined );
        
       //2. Usando toBeFalsy
        expect( heroe ).toBeFalsy();
    
        //3. Mostrar todos los nombres de heroes por Owner DC

    });

    test('getHeroebyOwner debe de regresar los valores con DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        //console.log(heroes);
        expect( heroes.length ).toBe( 3 );

        //Forma de evaluar menos eficiente, ya que si mi archivo json crece tendre 
        //que manejar manualmente mas informacion.
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC'},
            { id: 3, name: 'Superman', owner: 'DC'},
            { id: 4, name: 'Flash', owner: 'DC'},
        ]);

        //Otra forma de hacerlo mas rapido es 
        expect( heroes ).toEqual(  heroes.filter( (heroe) => heroe.owner === owner )  );

    });  

    test('getHeroebyOwner debe de regresar los valores con Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

        expect( heroes ).toEqual(  heroes.filter( (heroe) => heroe.owner === owner )  );

    });  

});

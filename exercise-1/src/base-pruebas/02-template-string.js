

//Anadimos la palabra export para que pueda ser probada

export function getSaludo(nombre) {
    return 'Hola ' + nombre;

}

nombre = "Juanita";

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
/*
10-Crea una función que reciba una cadena de texto y que cuente el número de apariciones de
cada carácter. Debe devolver un objeto de tipo clave-valor con el resultado.
Añade el código auxiliar necesario para probar la aplicació
*/

function contarCaracteres(cadena){
    // Se declara un objeto vacío que almacenará el conteo de cada carácter.
    let resultado= [];

   //La variable caracter representa un carácter individual de la cadena.
    for(let carácter of cadena){
        //Verifica si el carácter ya existe 
        if(resultado[[carácter]]){
        //Si el carácter ya está presente en el objeto, se incrementa su valor en 1,
            resultado[caracter]++;
        }else{
            resultado[caracter]=1;
        }
    }
    //Devuelve el objeto con los caracteres y sus respectivos conteos.
    return resultado;
};

// main 

let texto=prompt("Introduce una cadena de texto");
let conteo=contarCaracteres(texto);

console.log('Conteo de caracteres: ', conteo);





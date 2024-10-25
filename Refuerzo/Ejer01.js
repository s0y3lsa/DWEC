

'use strict';

function comprobarAnagramas(palabra1, palabra2) {


    let esAnagrama = "";

    if (!(palabra1 === palabra2)) {
        for (let caracter of palabra2) {
            if (palabra1.includes(caracter) && (palabra1.length === palabra2.length)) {
                esAnagrama = true;
            } else {
                esAnagrama = false;
            }
        }

        if (esAnagrama) {
            console.log('Si es anagrama');
        } else {
            console.log('No es una palabra anagrama');
        }

    } else {
        console.log('Error, son iguales');
    }
}

comprobarAnagramas('perro', 'rrope');
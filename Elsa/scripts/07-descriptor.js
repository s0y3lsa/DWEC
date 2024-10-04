'use strict';
/*
7-Crea una función que reciba un número e imprima la tabla de multiplicar.
Crea una función que solicite dos números entre 0 y 10, y que imprima las tablas de multiplicar
entre los números indicados. Las tablas aparecerán desde el número más pequeño al mayor
(aquí hay validaciones).

Añade el código auxiliar necesario para probar la aplicación
*/


function tablaMultiplicar(numero) {
        let resul='';
        let tabla = '';

    for (let i = 1; i < 10; i++) {
        

        resul = numero * i;

        tabla += numero + ' x ' + i + '=' + resul;

    }
    alert('Tabla Multiplicar : ' + tabla);

}
tablaMultiplicar(2);

function crearTablaRango(num1,num2){

    for(let i=num1;i<num2;i++){
        tablaMultiplicar(i);
    }
    
}
crearTablaRango(2,5); 

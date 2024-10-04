'use strict';
/*
11- Crea una función que reciba un rango, para cada valor en el rango se informará de si el
número es múltiplo de 3, si es múltiplo de 5 y si es número primo. Sólo mostrar información de
los números que cumplan alguna de las condiciones.
Añade el código auxiliar necesario para probar la aplicación
*/

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function saberMultiplo(num1, num2) {

    let multiplos3= [];
    let multiplos5=[];
    let primos=[];

    for (let i=num1; i <= num2; i++) {

        if (i % 3 === 0) {
            multiplos3.push(i);
        } 
           
        if (i % 5 === 0) {
            multiplos5.push(i);
        }

        if(esPrimo(i)){
            primos.push(i);
        }
    }
    console.log('Multipos de 3: '+ multiplos3);
    console.log('Multiplos de 5: '+ multiplos5);
    console.log('Numeros primos: '+ primos);
};
saberMultiplo(1,60);
/*
Ejercicio 11. Números perdidos
Escribe una función que reciba un array de números enteros, y devuelva otro array con los
números que falten entre los valores máximo y mínimo que falten en el array de entrada.
*/


function numerosPerdidos(arr) {
    // Encontrar el valor mínimo y máximo del array
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const faltantes = [];

    // Recorrer todos los números entre min y max
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            faltantes.push(i); // Agregar los números que faltan al array de faltantes
        }
    }

    return faltantes;
}

// Ejemplo de uso
const numeros = [1, 3, 7, 10];
console.log(numerosPerdidos(numeros)); // Resultado: [2, 4, 5, 6, 8, 9]
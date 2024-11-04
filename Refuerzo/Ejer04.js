
/*Ejercicio 4. Expresiones equilibradas.
Escribe una función que compruebe si los paréntesis, llaves y corchetes de una expresión
están equilibrados. Es decir, si cada símbolo de apertura se corresponde con un símbolo
de cierre en orden.
Correcto: { [ a * ( c + d ) ] - 5 }
Incorrecto: { a * ( c + d ) ] - 5 }
 */ 

function comprobarCaracteres(cadena){


    let pila = [];
    let pares = {
        '(': ')',
        '{': '}',
        '[': ']'
    };


    for (let i = 0; i < expresion.length; i++) {
        const caracter = expresion[i];

        // Si el carácter es un símbolo de apertura, lo añadimos a la pila
        if (pares[caracter]) {
            pila.push(caracter);
        } 
        // Si es un símbolo de cierre, comprobamos el tope de la pila
        else if (caracter === ')' || caracter === '}' || caracter === ']') {
            const apertura = pila.pop();
            if (pares[apertura] !== caracter) {
                return false; // Si no coincide, la expresión no está equilibrada
            }
        }
    }

    // Al final, la pila debe estar vacía para que la expresión esté equilibrada
    return pila.length === 0;
}
// Ejemplos de uso
console.log(expresionEquilibrada("{ [ a * ( c + d ) ] - 5 }")); // true
console.log(expresionEquilibrada("{ a * ( c + d ) ] - 5 }")); // false
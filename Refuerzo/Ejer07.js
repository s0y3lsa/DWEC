/*

Ejercicio 7. Conjuntos
Escribe una función que reciba dos arrays de números enteros y un parámetro operación.
Y siguiendo la teoría de conjuntos deberá devolver en función del parámetro operación lo
siguiente:
• Operación “unión”, combinación de valores no repetidos de ambos arrays.
• Operación “intersección”, valores no repetidos que se encuentran en ambos
conjuntos.
• Operación “diferencia”, valores del primer array no repetidos menos los valores de
la intersección.
No puedes emplear “Set” para la resolución del ejercicio
*/

function operarConjuntos(array1, array2, operacion){
    let resultado = [];


    // Función auxiliar para eliminar duplicados en un array
    function eliminarDuplicados(array) {
        const sinDuplicados = [];
        for (const elemento of array) {
            if (!sinDuplicados.includes(elemento)) {
                sinDuplicados.push(elemento);
            }
        }
        return sinDuplicados;
    }

    
     // Eliminar duplicados de los arrays de entrada
     const sinDuplicados1 = eliminarDuplicados(array1);
     const sinDuplicados2 = eliminarDuplicados(array2);

     switch(operacion){
        case "union":
            //Union combinar ambos arrays sn repitir valores

            for(const elemento of sinDuplicados1){
                resultado.push(elemento);
            }
        break;
        for (const elemento of sinDuplicados2) {
            if (!resultado.includes(elemento)) {
                resultado.push(elemento);
            }
        }
        break;
        case "intersección":
            // Intersección: valores que se encuentran en ambos arrays
            for (const elemento of sinDuplicados1) {
                if (sinDuplicados2.includes(elemento)) {
                    resultado.push(elemento);
                }
            }
            break;
        case "diferencia":
                // Diferencia: valores en el primer array que no están en la intersección
                for (const elemento of sinDuplicados1) {
                    if (!sinDuplicados2.includes(elemento)) {
                        resultado.push(elemento);
                    }
                }
                break;
    
            default:
                return "Operación no válida";
     }

     return resultado;
}
// Ejemplo de uso:
const array1 = [1, 2, 2, 3, 4];
const array2 = [3, 4, 4, 5, 6];

console.log("Unión:", operarConjuntos(array1, array2, "unión"));  
console.log("Intersección:", operarConjuntos(array1, array2, "intersección"));
console.log("Diferencia:", operarConjuntos(array1, array2, "diferencia"));

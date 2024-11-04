function segundoMasGrande(arr) {
    // Validación: si el array tiene menos de 2 elementos, no se puede encontrar el segundo más grande.
    if (arr.length < 2) {
        return null;
    }

    let max = -Infinity;
    let segundoMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            segundoMax = max;  // El antiguo máximo se convierte en el segundo más grande
            max = num;         // Actualiza el máximo
        } else if (num > segundoMax && num < max) {
            segundoMax = num;  // Actualiza el segundo más grande solo si es menor que el máximo
        }
    }

    // Si segundoMax sigue siendo -Infinity, significa que todos los elementos son iguales
    return segundoMax === -Infinity ? null : segundoMax;
}

// Ejemplo de uso
const numeros = [3, 5, 7, 7, 6, 5];
console.log(segundoMasGrande(numeros));  // Resultado: 6
/*

Escribe una función que dibuje el logotipo del zelda con asteriscos. Recibe como
parámetro el número de filas de cada triangulo.
Ten en cuenta que cada triangulo calcula su fila mayor (base) con la formula 2n-1.
Por ejemplo: 3
*/

function dibujarLogoZelda(filas) {
    let logo = '';

    // Dibuja el triángulo superior
    for (let i = 1; i <= filas; i++) {
        // Agrega los espacios para centrar el triángulo
        logo += ' '.repeat(filas - i);
        // Agrega los asteriscos para cada fila
        logo += '*'.repeat(2 * i - 1);
        logo += '\n';
    }

    // Dibuja los dos triángulos inferiores
    for (let i = 1; i <= filas; i++) {
        // Triángulo izquierdo
        logo += '*'.repeat(2 * i - 1);
        // Espacio entre los triángulos
        logo += ' '.repeat(filas * 2 - (2 * i));
        // Triángulo derecho
        logo += '*'.repeat(2 * i - 1);
        logo += '\n';
    }

    return logo;
}

// Ejemplo de uso
console.log(dibujarLogoZelda(3));
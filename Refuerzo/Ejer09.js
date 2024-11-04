/*

Ejercicio 9. Marco para frases.
Escribe una función que reciba una frase y muestre cada palabra en un línea, la salida
está envuelta en un marco de asteriscos.
Por ejemplo, la entrada ¿Qué te parece el reto?
Genera la siguiente salida.
*/

//Función enmarcarFrase(frase): Esta función recibe una frase como parámetro y 
//se encarga de enmarcar cada palabra de la 
//frase dentro de un cuadro de asteriscos
function enmarcarFrase(frase) {
    const palabras = frase.split(" ");
    const longitudMaxima = Math.max(...palabras.map(palabra => palabra.length));
    const borde = "*".repeat(longitudMaxima + 4);
    let resultado = borde + "\n";

    palabras.forEach(palabra => {
        const espacios = " ".repeat(longitudMaxima - palabra.length);
        resultado += `* ${palabra}${espacios} *\n`;
    });

    resultado += borde;
    return resultado;
}

// Ejemplo de uso en consola
console.log(enmarcarFrase("¿Qué te parece el reto?"));
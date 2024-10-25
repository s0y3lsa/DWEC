'use strict';

let $bingo = (function () {
    let cartones = {
        jugador1: [[], [], []],
        jugador2: [[], [], []],
        humano: [[], [], []]
    };
    let datosMarcador = {
        jugador1: [0, 0],
        jugador2: [0, 0],
        humano: [0, 0],
    };
    let bolasSacadas = {};
    return {
        pintarCartones,
        generarCarton,
        iniciarJuego,
        cartones,
        datosMarcador,
        bolasSacadas,
        siguienteBola,
        indicarValor,
        cantarLinea,
        cantarBingo,
        alguienGano,
        verificarCartonesNoHumanos,
        comprobarNumeroNoHumano,
        resumen,
        actualizarMarcadores,
    };



    function iniciarJuego() {
        cartones.jugador1 = generarCarton();
        cartones.jugador2 = generarCarton();
        cartones.jugador3 = generarCarton();
        let bolas = {};


    }


    function generarCarton() {
        let carton = [[], [], []]; // Iniciamos el cartón como un array de arrays
        let usados = new Set(); // Conjunto para almacenar los números usados

        // Generar números aleatorios para cada columna y rellenar el cartón
        for (let columna = 0; columna < 9; columna++) { // 9 columnas
            let max = (columna + 1) * 10; // Máximo valor de la columna
            let min = max - 9; // Mínimo valor de la columna

            let numerosColumna = [];

            // Generar 3 números únicos para la columna
            while (numerosColumna.length < 3) {
                let numero = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!usados.has(numero)) {
                    usados.add(numero); // Añadir al conjunto de números usados
                    numerosColumna.push(numero); // Añadir al array de la columna
                }
            }
            // Ordenar los números dentro de la columna
            numerosColumna.sort((a, b) => a - b);

            // Asignar los números generados a la columna correspondiente en el cartón
            for (let fila = 0; fila < 3; fila++) {
                carton[fila][columna] = numerosColumna[fila] || '*'; // Asignar '*' si no hay número
            }
        }

        // Rellenar con asteriscos algunas posiciones aleatorias (para tener 4 números por fila)
        for (let fila = 0; fila < 3; fila++) {
            let asteriscos = 0;
            while (asteriscos < 4) { // 4 espacios vacíos por fila
                let columna = Math.floor(Math.random() * 9); // Columna aleatoria
                if (carton[fila][columna] !== '*') {
                    carton[fila][columna] = '*';
                    asteriscos++;
                }
            }
        }
        return carton;
    }


})();

function pintarCartones(jugador) {
    //primer carton 
    document.getElementById('comenzar').addEventListener('click', function () {
        let carton = $bingo.cartones[jugador]; // Accedemos al cartón del jugador
        let contenido = '';  // Inicia la cadena para contener el HTML

        for (let fila = 0; fila < 3; fila++) {
            contenido += '<div style="display: flex;">'; // Cada fila del cartón es un div con display: flex
            for (let columna = 0; columna < 9; columna++) {
                // Se crea cada celda con el valor correspondiente del cartón (o vacío si no tiene valor)
                contenido += '<div class="contenedor">' + (carton[fila][columna] || '') + '</div>';
            }
            contenido += '</div>'; // Cerramos el div de la fila
        }

        document.getElementById(jugador).innerHTML = contenido; // Insertamos el contenido generado en el div del jugador
    });
}



function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function siguienteBola(Bolas) {
    let nuevaBola = generarNumeroAleatorio(1, 90);

    if (!bolasSacadas.includes(nuevaBola)) {
        bolasSacadas.push(nuevaBola);
        console.log(`Bola sacada: ${nuevaBola}`);
        pintarBolasSacadas();
        verificarCartonesNoHumanos();
    } else {
        sacarSiguienteBola();
    }
}

function mostrarBolas() {

}

function indicarValor() {

}

function cantarLinea() {
    let esLinea = verificarLinea(cartones.humano);
    if (esLinea) {
        console.log("¡Línea cantada!");
        datosMarcador.humano[0] += 1;
        actualizarMarcadores();
    } else {
        console.log("No tienes ninguna línea completa aún.");
    }

}

function cantarBingo() {
    let esBingo = verificarBingo(cartones.humano);
    if (esBingo) {
        console.log("¡Bingo cantado!");
        datosMarcador.humano[1] += 1;
        actualizarMarcadores();
    } else {
        console.log("Aún no tienes un bingo completo.");
    }

}

function alguienGano() {
    if (verificarBingo(cartones.humano) || verificarBingo(cartones.jugador1) || verificarBingo(cartones.jugador2)) {
        console.log("¡Alguien ha ganado!");
        return true;
    }
    return false;
}

function verificarCartonesNoHumanos() {
    ['jugador1', 'jugador2'].forEach(jugador => {
        if (verificarLinea(cartones[jugador])) {
            datosMarcador[jugador][0] += 1;
        }
        if (verificarBingo(cartones[jugador])) {
            datosMarcador[jugador][1] += 1;
        }
    });
    actualizarMarcadores();
}

function comprobarNumeroNoHumano() {

    return ['jugador1', 'jugador2'].some(jugador => {
        return cartones[jugador].some(fila => fila.includes(numero));
    });
}

function actualizarMarcadores() {

    let contenido = '';
    for (let jugador in datosMarcador) {
        contenido += `<p>${jugador}: ${datosMarcador[jugador][0]} líneas y ${datosMarcador[jugador][1]} bingos</p>`;
    }
    document.getElementById('resumen').innerHTML = contenido;
}


function resumen() {
    document.getElementById('comenzar').addEventListener('click', function () {
        let contenido = '';  // Inicia la cadena para contener el HTML
        for (let datos in $bingo.datosMarcador) {
            contenido += `<p>${datos}: ${$bingo.datosMarcador[datos][0]} lineas y ${$bingo.datosMarcador[datos][1]} bingos</p>`;
            
        }
        // Insertamos el contenido generado en el div de resumen
        document.getElementById('resumen').innerHTML = contenido;
    });
}


window.addEventListener('load', function () {
    $bingo.iniciarJuego();
    $bingo.pintarCartones('jugador1');
    $bingo.pintarCartones('jugador2');
    $bingo.pintarCartones('jugador3');
    $bingo.resumen();

    document.getElementById('comenzar').addEventListener('click', $bingo.siguienteBola);

    document.getElementById('cantarLinea').addEventListener('click', $bingo.cantarLinea);

    document.getElementById('cantarBingo').addEventListener('click', $bingo.cantarBingo);

});

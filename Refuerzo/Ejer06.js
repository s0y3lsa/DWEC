/* 

Escribe un programa para jugar al tres en raya. Divídelo en funciones.
• comprobarEstado(matriz) devuelve x si ganan las x, o si ganan los o, “empate” si
no ha ganado ninguno, cadena vacía en otro caso.
• ponerMaquina(matriz, ficha) actualiza la matriz añadiendo en una celda vacía
una ficha, comprobará si al poner la ficha puede realizar un tres en raya. Seguido
comprobará si el puede impedir que el otro jugador haga un tres en raya. Por
último, colocara la ficha de manera aleatoria.
• ponerHumano(matriz, x, y, ficha) actualiza la matriz posicionando la ficha en la
posición x,y comprobando que esta esté libre. Devuelve true cuando se coloca la
ficha con éxito, false en caso contrario.
• dibujarTablero(matriz) representa la matriz.
Reglas adicionales.
Siempre comienzan las “X”, de manera aleatoria se elegirá si comienza el humano o la
máquina


*/

// Inicializa la matriz vacía

let matriz= [

    ['','',''],
    ['','',''],
    ['','',''],
    []

];


function dibujarTablero(matriz){
    matriz.forEach(row => console.log(row.join(' | ')));
    console.log('\n');
}

// Función para comprobar el estado del juego
function comprobarEstado(matriz) {
    const lineas = [
        // Filas
        [matriz[0][0], matriz[0][1], matriz[0][2]],
        [matriz[1][0], matriz[1][1], matriz[1][2]],
        [matriz[2][0], matriz[2][1], matriz[2][2]],
        // Columnas
        [matriz[0][0], matriz[1][0], matriz[2][0]],
        [matriz[0][1], matriz[1][1], matriz[2][1]],
        [matriz[0][2], matriz[1][2], matriz[2][2]],
        // Diagonales
        [matriz[0][0], matriz[1][1], matriz[2][2]],
        [matriz[0][2], matriz[1][1], matriz[2][0]]
    ];

    for (const linea of lineas) {
        if (linea.every(cell => cell === 'x')) return 'x';
        if (linea.every(cell => cell === 'o')) return 'o';
    }

    // Comprueba si hay un empate
    if (matriz.flat().every(cell => cell !== '')) return 'empate';

    // Si el juego continúa
    return '';
}
// Función para que la máquina ponga una ficha
function ponerMaquina(matriz, ficha) {
    // Primero, intenta ganar
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === '') {
                matriz[i][j] = ficha;
                if (comprobarEstado(matriz) === ficha) return;
                matriz[i][j] = '';
            }
        }
    }

    // Luego, intenta bloquear al oponente
    const oponente = ficha === 'x' ? 'o' : 'x';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === '') {
                matriz[i][j] = oponente;
                if (comprobarEstado(matriz) === oponente) {
                    matriz[i][j] = ficha;
                    return;
                }
                matriz[i][j] = '';
            }
        }
    }

    // Coloca la ficha en una celda vacía aleatoria
    let x, y;
    do {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
    } while (matriz[x][y] !== '');
    matriz[x][y] = ficha;
}

// Función para que el humano ponga una ficha
function ponerHumano(matriz, x, y, ficha) {
    if (matriz[x][y] === '') {
        matriz[x][y] = ficha;
        return true;
    }
    return false;
}

// Ejecución del juego
function jugarTresEnRaya() {
    let turno = Math.random() < 0.5 ? 'humano' : 'maquina';
    const fichaHumano = 'x';
    const fichaMaquina = 'o';

    while (true) {
        console.clear();
        dibujarTablero(matriz);
        const estado = comprobarEstado(matriz);

        if (estado) {
            console.log(`Resultado: ${estado === 'empate' ? 'Es un empate' : `Ganan las ${estado}`}`);
            break;
        }

        if (turno === 'humano') {
            // Solicita entrada al humano
            const x = parseInt(prompt("Ingrese la fila (0, 1, o 2): "));
            const y = parseInt(prompt("Ingrese la columna (0, 1, o 2): "));

            if (ponerHumano(matriz, x, y, fichaHumano)) {
                turno = 'maquina';
            } else {
                console.log("Posición ocupada. Intente de nuevo.");
            }
        } else {
            // Turno de la máquina
            ponerMaquina(matriz, fichaMaquina);
            turno = 'humano';
        }
    }
}

// Inicia el juego
jugarTresEnRaya();

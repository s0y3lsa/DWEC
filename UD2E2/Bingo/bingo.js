
// $bingo autoinvocada

const $bingo= (function(){

    
    
    //Un array con los cartones de los jugadores
    let cartones=[];

    //Un array con los datos del marcador.
    let datosMarcador={};

    function generarCartones(){
        cartones=[
            {id: "jugador1", carton:generarCarton(),lineas:0,bingo:0 },
            {id: "jugador2", carton:generarCarton(),lineas:0,bingo:0},
            {id:"jugadorHumano",carton:generarCarton(),lineas:0,bingos:0}
        ];
    }

    function generarCarton() {
        let carton = []; // Iniciamos el cartón como un array de arrays
       
        for (let i = 0; i < 3; ++i) { // 3 filas
            let fila = [];
            for (let columna = 0; columna < 9; ++columna) { // 9 columnas por fila
                let min = columna * 10; // Mínimo valor de la columna
                let max = min + 9; // Máximo valor de la columna
                let numero = Math.floor(Math.random() * (max - min + 1)) + min; // Generar un número aleatorio entre min y max
                fila.push(numero); // Agregar número a la fila
            }
            carton.push(fila); // Agregar la fila al cartón
        }
        // Mostrar el cartón completo
        for (let fila = 0; fila < carton.length; fila++) {
            console.log(carton[fila]);
        }
         //ordenaor el array de numeros 
        return carton.sort();
    }
    
    function pintarCarton(id,carton){

         // Obtener el contenedor del cartón por su id
         const contenedorCarton = document.getElementById(id);

         // Verifica si el contenedor existe
         if (!contenedorCarton) {
            console.error(`Contenedor con id ${id} no encontrado.`);
            return;
        }
        // Inicializamos una variable para ir construyendo el HTML
        let htmlCarton = '';

        //recorrer filas del carton
        for (let fila = 0; fila < 3; fila++) {
            htmlCarton += '<div class="fila">'; // Abrimos el div para la fila

            // Recorrer las columnas de la fila (9 columnas)
            for (let col = 0; col < 9; col++) {
                const valorCelda = carton[fila][col] === null ? '*' : carton[fila][col]; // Si es null, mostramos '*'
                htmlCarton += `<div class="celda">${valorCelda}</div>`; // Agregamos el valor en un div con clase 'celda'
            }
     
                htmlCarton += '</div>';
        }

        contenedorCarton.innerHTML = htmlCarton;
    }

    //Un método que inicialice el juego
    function inicializarJuego(){

        let carton1=generarCarton();
        let carton2=generarCarton();
        let carton3=generarCarton();

        //Un array con las bolas sacadas en la partida actual
        let bolas=[];

            for(let i=0;i<bolas.length;i++){

                for(let i=0; i<90;i++){
            }
            if(i===sacarBola()){

            }

        }
    }

    function cantarLinea(){

    }
    function cantarBingo(){

    }

    function jugadorGanador(){

    }
    //Un método para sacar la siguiente bola
    function sacarBola(){

      let numRandom= Math.floor(Math.random()*90)+1;

      return numRandom;

    }


    // Para el humano, un método para indicar que tiene un valo

    return inicializarJuego(),
            sacarBola(),
            generarCarton(),




})();

window.addEventListener('load', function () {

    document.getElementById('generarCarton').addEventListener('click', function () {

     
    });
});



// $bingo autoinvocada

const $bingo= (function(){

    
    
    //Un array con los cartones de los jugadores
    let cartones={};

    //Un array con los datos del marcador.
    let datosMarcador={};

    //Un array con las bolas sacadas en la partida actual
    let bolas={};

    function generarCarton(){
        let carton= "";
       let numerosPorColumna = [[], [], [], [], [], [], [], [], []]; // Arreglos para almacenar números de cada decena
       
       // 
       let totalNumeros=15;
       while(totalNumeros>0){


        for(i= 0; i<9;i++){
            //columnas
            let min=i*10;
            let maximo=Math.floor(Math.random()*10) + min;

            let numerosUsados={};

            //rango 1 y 90

            if(!numerosUsados[maximo]){
                numerosPorColumna[i].push(maximo); //establecer en el array
                
              
            }

        }
       }
        
    }



    //Un método que inicialice el juego
    function inicializarJuego(){

    }
    //Un método para sacar la siguiente bola
    function sacarBola(){

    }
    // Para el humano, un método para indicar que tiene un valo

    return inicializarJuego(),
            sacarBola(),
            generarCarton(),
})();

//Cartones de juagores array subdimensional

function 


//Carton Jugador humano comprobar que no haya repetidos, while
aleatorios = Array [ [1-10] , [], []];
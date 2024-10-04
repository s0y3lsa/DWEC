'use strict';
/*
12-Juego acertar número.
Calcula un numero aleatorio entre 1 y 100, este número permanecerá secreto. Pide al usuario
un numero en rango, el programa le dirá si es mayor o menor que el número secreto. Si el
usuario acierta el número secreto gana. El usuario dispondrá de 5 intentos para acertar el
número secreto, tras lo cual, el programa dirá que ha perdido y le mostrará el número secreto.
Añade el código auxiliar necesario para probar la aplicación

*/
function sacarNumeroRandom() {
    //numeros  aleatorios
    return Math.floor(Math.random() * 100) + 1;
}
function numeroAleatorio() {

    let intentos = 0;
    let intentosMaximos = 5;

    let numSecreto = sacarNumeroRandom();
    let num;

    let adivinado;

    while (intentos < intentosMaximos) {
        num = parseInt(prompt('Introduce un numero entre 1 y 100: '));

        if (num > numSecreto) {
            console.log('El numero es mayor');
        } else if (num < numSecreto) {
            console.log('El numero es menor');
        } else if (num === numSecreto) {
            console.log('Numero secreo acertado.');
            adivinado=true;
            break;
        }
        intentos++;
        //alert('Intentos fallidos');
    }

    if(adivinado){
        console.log('Numero acertado');
    }else{
        console.log('Numero adivinado fallido')
    }
    

}

numeroAleatorio();


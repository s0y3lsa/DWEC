'use strict';

/*
13-Juego mates
Crea un programa que genere dos números aleatorios entre 1 y 10, y un operador aritmético.
Se ofrecerá al usuario los valores para que calcule el resultado, y el programa le dirá si el
resultado es correcto o incorrecto.
Las preguntas, respuesta del usuario y si ha acertado o fallado se almacenarán ordenadamente
en un array.
Se preguntas se realizarán en lotes de 4, tras lo cual se consultará al usuario si desea continuar.
Cuando el usuario no desee seguir jugando se mostrará un resumen de las preguntas (número,
pregunta y acierto) así como el total de preguntas acertadas y el total de falladas.
Añade el código auxiliar necesario para probar la aplicación
*/


function numeroAleatorios(){
    return Math.floor(Math.random()*100)+1;
    
}
function operadoresAleatorios(){

    opeRand= Math.floor(Math.random()*3)+1;
    operadores= ['+','-','x','/'];

    return resulOpe=operadores(opeRand);
}

function resultado(){

   numAle1=numeroAleatorios();
   numAle2=numeroAleatorios();

   
    let intentos=0;
    let intentosMaximos=4;

    let operador=operadoresAleatorios();
    let resultado;
    let acertado='';
    
    while(intentos<intentosMaximos){

        switch(operador){
            case '+':
                resultado=numAle1+numAle2;
                alert= (numAle1 ,'+', numAle3, ' = ' , resultado);
                break;
            case '-':
                resultado=numAle1-numAle2;
                alert=(numAle1 ,' - ', numAle2, ' = ',resultado);
                break;
            case '*':
                resultado=numAle1*numAle2;
                alert=(numAle1, ' * ', numAle2 , ' = ',resultado);
                break;
            case '/': 
                resultado=numAle1/numAle2;
                alert=(numAle1, ': ', numAle2, " = ",resultado);
                break;
        }
        intentos++;
        
        respuestaUsuario= promt('Introduce el resultado de la operacion: ');

        if(resultadoUsuario === resultado){
            alert('Lo has adivinado');
            acertado=true;
        }else{
            alert('No lo has adivinado ');
            acertado=false;
        }

        respuestas[intentos] = {resultado, respuestaUsuario, acertado};

        continuar= promt('Desea continuar (s \ n )');
        if(continuar === 'n '){
                intentos=0;

        }else{
            break;
        }
    }
    

}





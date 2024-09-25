"use strict";

let mayor=0;
let menor=100000;
let suma=0;
let media=0;
let total=0;
let numero;

do{
    //solicitar al usuario 
    numero= parseInt(prompt('Introduzca un número',undefined));
    if(numero!=0){
        //numero maximo
        if(numero>mayor){
            mayor=numero;
        //numero mínimo 
        }
        if(numero<menor){
            menor=mayor;
        }
            //suma total  de los numeros 
            suma+=numero;
            total++;
    }
    
            //media de los numeros 
            media=suma/total;

}while(numero!=0);

alert('La suma de todos los numeros es: '+ suma + '\n'+
    ' La media de todos los numeros es: '+ media+'\n');










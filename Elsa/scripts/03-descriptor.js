"use strict";


(function (){

    // mensaje para introducir los datos: 
    let num=parseInt(prompt ("Introduce un numero",0));

    
    let filas= new Array(num);

    //recorrer filas
    for(let i=0;i<num;++i){

        //filas dentro del array recorre 
        filas[i]=new Array;

        //recorre las columnas del array 
        for(let j=0;j<num;++j){
            //primeras y ultimas, filas y columnnas
            if(i==0 || i==num-1 || j==0 || j==num-1){
                filas[i][j]='*';
            //si no es la primera ni la ultima se quedan vacias 
            }else{
                //relleno
                filas[i][j]=' ';
            }
        }

        console.log(filas);
    }
}
)();

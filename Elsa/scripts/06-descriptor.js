'use strict';





    function cuadradoHueco(tamano){
        let resultado="";

        for (let i=0;i<tamano;i++){

            if(i===0 || i===tamano-1){

                resultado+="*".repeat(tamano)+"\n";
            }else{
                resultado+="*"+" ".repeat(tamano-2)+" *\n";
            }
        }
        return resultado;
    }




    //funcion para triangulo 
    function triangulo(tamano){
        let resultado="";

        for(let i=0;i<tamano;i++){
            resultado +="*".repeat(i)+"\n";
        }
        return resultado;
    }

    //cuadrado relleno
    function dibujarCuadrado(tamano){

        let resultado="";

        for(let i=0;i<tamano;i++){
            //fila de aesteriscos 
            for(let j=0;j<tamano;i++){
                resultado +="*";
            }
            //agregar un salto de linea despues de completar cada fila
            resultado="\n";
        }
        return resultado;

    }
    
    console.log(dibujarCuadrado(5));







function fibonacci(longitud){

    let array=[];
    array.push(0,1);
    let suma;

    for(let i=2;i<longitud;i++){

        
        suma = array[i-1] + array[i-2];
        array.push(suma);
    }
    
console.log(array);
}

fibonacci(10);
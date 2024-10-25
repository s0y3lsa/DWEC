




function codificacionMorse(palabraMorse){

    
    let caracter="";
    let traduccion="";
    let esMorse="";

    for(caracteres of  caracter){

    
    if(caracter === '-' && caracter==='.' && caracter===' '){
        esMorse = true;
    
        switch(palabraMorse){

            case '--.': 
                traduccion= 'a';  
                break;
            case '-...':
                traduccion='b'; 
                break;
            case '-.-.':
                traduccion='c';
                break;
            case '-..':
                traduccion='d';
                break;
            case '.':
                traduccion='e';
                break;
            case '..-.':
                traduccion='f';
                break;
            case '--.':
                traduccion='g';
                break;
            case '....':
                traduccion='h';
                break;
            case '..':
                traduccion='l';
                break;
            case '.---':
                traduccion='m';
                break;
            case '-.':
                traduccion='n';
                break;
            case '---':
                traduccion='o';
                break;
            case '.--.':
                traduccion='p';
                break;
            case '--.-':
                traduccion='q';
                break;
            case '.-.':
                traduccion='r';
                break;
            case '...':
                traduccion='s';
            case '-':
                traduccion='t';
            case '..-':
                traduccion='u';
                break;
            case '...-':
                traduccion='v';
                break;
            case '.--':
                traduccion='w';
                break;
            case '-..-':
                traduccion='x';
                break;
            case '-.--':
                traduccion='y';
                break;
            case '--..':
                traduccion='z';
        }
        return  traduccion;
        
    }
    console.log('La palabra traducida es: '+ traduccion);
}
    

}

codificacionMorse('.-');












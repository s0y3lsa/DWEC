import


function Casilla(numero,valor,avisarPapa){
    const hadleClick=()=>{
        avisarPapa(numero); // Llamamos a la función que fue pasada como prop
    }
    return (<div>{valor}</div>);

 }
 
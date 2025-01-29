import Hijo from "./Hijo";

const dimeHijo=(mensaje)=>{
    console.log(mensaje)
};

function Papa({children}){
    return(
    <>
        <h1>Soy tu papa</h1>
        <Hijo nombre="Diego" fnllorar={dimeHijo}/>
        <Hijo nombre="Paqui"/>
        <h2>Pendientes</h2>
        {children}
    </>
    );
}
export default Papa;
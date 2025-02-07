import { useContext } from "react";
import {Navigate,useNavigate} from "react-router-dom";
import {SeguridadContext} from "../contexts/SeguridadContext";
//
function AdministracionPage(){
    const {datos}=useContext(SeguridadContext);
    const navegar=useNavigate();
    if(!datos.tienePemisos){
        return <Navigate to="/"/>
    }
    const handleClick=()=>{
        if(confirm("Ir a inicio")){
            navegar("/");
        }
    };
    return (
        <>
            <h1>Pagina de administracion</h1>
            <button onClick={handleClick}>Volver a inicio</button>
        </>
    );
}
export default AdministracionPage;
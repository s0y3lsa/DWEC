import { useContext,useState } from "react";
import {Navigate} from "react-router-dom";
import SeguridadProvider,{
    SeguridadContext,
} from "../context/SeguridadProvider";


function AdministracionPage(){
    
   const {datos,mostrarMensaje}=useContext(SeguridadContext)
   if(!datos.tienePermisos){
        return <Navigate to="/"/>;}
    return(<>
    <h1>Pagina con permisos</h1>
    </>)
}

export default AdministracionPage;
import { useContext } from "react";
import { SeguridadContext } from "../context/SeguridadProvider";
import { useState } from "react";

function HomePage(){
    const{datos,logIn,logOut}=useContext(SeguridadContext);
    const [nombre,setNombre]=useState("");

    function handleClick() {
        if (datos.tienePermisos) {
          setNombre("");
          logOut();
        } else {
          if (nombre === "") {
            return;
          }
          logIn(nombre);
        }
    }
    const handleChange=(e)=>{
        setNombre(e.target.value);
    }
    return ( 
        <>
          <h1>Página de inicio</h1> 
          <div> 
            {datos.tienePermisos ? ( 
              <> 
                <span>Hola {datos.usuario} </span> 
                <button>Salir</button> 
              </> 
            ) : ( 
              <> 
                <span>Nombre: </span> 
                <input 
                  type="text" 
                  name="nombre" 
                  value={nombre} 
                  onChange={handleChange} 
                ></input> 
                <button onClick={handleClick}>Entrar</button> 
              </> 
            )} 
          </div> 
        </> 
      );
}

export default HomePage;
import {useEffect,useState} from "react";
import $negocio from "../services/negocio";

function Coches(){
    /*useState almacena la lista de coches */
    const [coches,setCoches]=useState([]);

    useEffect( ()=> {
        setCoches($negocio.obtenerCoches());
    },[]);

    return (
        <div>
            <h1>Lista de Coches</h1>
            <ul>
            {coches.map((coche) => (
            <li key={coche.id}>
            {coche.marca} {coche.modelo} - {coche.precio}€
            </li>
             ))}
            </ul>
        </div>
    );
}
export default Coches;


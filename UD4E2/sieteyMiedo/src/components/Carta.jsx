import React from "react";
import { recuperarCarta } from "./Utilidades";
 
const Carta = ({ cartaId }) => {
    const carta = recuperarCarta(cartaId);
 
    return (
        <div>
            <div>{carta.numero}</div>
            <div>{carta.palo}</div>
        </div>
    );
};
 
export default Carta;
 
import React from "react";
import Carta from "./Carta";
 
const ZonaCrupier = ({ cartas, puntos }) => {
    return (
        <div>
            <h2>Crupier</h2>
            <div>
                {cartas.map((id) => (
                    <Carta key={id} cartaId={id} />
                ))}
            </div>
            <p>Puntos: {puntos}</p>
        </div>
    );
};
 
export default ZonaCrupier;
 

import React from "react";
import Carta from "./Carta";
const ZonaJugador = ({ cartas, puntos, dameCarta, mePlanto, juegoActivo }) => {
    return (
        <div>
            <h2>Jugador</h2>
            <div>
                {cartas.map((id) => (
                    <Carta key={id} cartaId={id} />
                ))}
            </div>
            <p>Puntos: {puntos}</p>
            <div>
                <button onClick={dameCarta} disabled={!juegoActivo}> Dame Carta </button>
                <button onClick={mePlanto} disabled={!juegoActivo}> Me Planto </button>
            </div>
        </div>
    );
};
export default ZonaJugador;
 
import React, { useState, useEffect } from "react";
import { barajarCartas, sumarCartas, recuperarCarta } from "./Utilidades.js";
import ZonaCrupier from "./ZonaCrupier";
import ZonaJugador from "./ZonaJugador";
 
const Juego = () => {
    const [mazo, setMazo] = useState(barajarCartas());
    const [cartasJugador, setCartasJugador] = useState([]);
    const [cartasCrupier, setCartasCrupier] = useState([]);
    const [puntosJugador, setPuntosJugador] = useState(0);
    const [puntosCrupier, setPuntosCrupier] = useState(0);
    const [juegoActivo, setJuegoActivo] = useState(true);
    const [mensaje, setMensaje] = useState("");
 
    useEffect(() => {
        if (puntosJugador > 7.5) {
            setMensaje("Crupier gana");
            setJuegoActivo(false);
        }
    }, [puntosJugador]);
 
    const dameCarta = () => {
        if (mazo.length === 0) return;
        const nuevaCarta = mazo.pop();
        const nuevaMano = [...cartasJugador, nuevaCarta];
        setCartasJugador(nuevaMano);
        setPuntosJugador(sumarCartas(nuevaMano));
        setMazo([...mazo]);
    };
 
    const mePlanto = () => {
        setJuegoActivo(false);
        let nuevaManoCrupier = [];
        let totalCrupier = 0;
        while (totalCrupier < 5.5) {
            const nuevaCarta = mazo.pop();
            nuevaManoCrupier.push(nuevaCarta);
            totalCrupier = sumarCartas(nuevaManoCrupier);
        }
        setCartasCrupier(nuevaManoCrupier);
        setPuntosCrupier(totalCrupier);
        determinarGanador(totalCrupier);
    };
 
    const determinarGanador = (totalCrupier) => {
        if (puntosJugador > 7.5) {
            setMensaje("Crupier gana");
        } else if (totalCrupier > 7.5 || puntosJugador > totalCrupier) {
            setMensaje("Jugador gana");
        } else {
            setMensaje("Crupier gana");
        }
    };
 
    return (
        <div>
            <h1>Juego de 7 y Medio</h1>
            <div className="mensaje">
                <h2>{mensaje}</h2>
            </div>
            <div className="zonaCrupier">
                <ZonaCrupier cartas={cartasCrupier} puntos={puntosCrupier} />
            </div>
            <div className="zonaJugador">
                <ZonaJugador
                    cartas={cartasJugador}
                    puntos={puntosJugador}
                    dameCarta={dameCarta}
                    mePlanto={mePlanto}
                    juegoActivo={juegoActivo}
                />
            </div>
        </div>
    );
};
 
export default Juego;
 
 
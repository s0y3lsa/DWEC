import React, { useState } from "react";

function Tablero() {
    const [tablero, setTablero] = useState(new Array(9).fill(""));
    const [turno, setTurno] = useState("X");
    const [ganador, setGanador] = useState(null);
    const [marcador, setMarcador] = useState({ X: 0, O: 0 });
    const [inicioTurno, setInicioTurno] = useState("X");
 
    const verificarGanador = (nuevoTablero) => {
        const combinacionesGanadoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
 
        for (let combinacion of combinacionesGanadoras) {
            const [a, b, c] = combinacion;
            if (
                nuevoTablero[a] &&
                nuevoTablero[a] === nuevoTablero[b] &&
                nuevoTablero[a] === nuevoTablero[c]
            ) {
                return nuevoTablero[a];
            }
        }
 
        return nuevoTablero.every((casilla) => casilla) ? "Empate" : null;
    };
 
    const trabajarParaHijo = (numero) => {
        if (tablero[numero] || ganador) return;
 
        const nuevoTablero = [...tablero];
        nuevoTablero[numero] = turno;
        setTablero(nuevoTablero);
 
        const resultado = verificarGanador(nuevoTablero);
 
        if (resultado) {
            setGanador(resultado);
            if (resultado !== "Empate") {
                setMarcador((prevMarcador) => ({
                    ...prevMarcador,
                    [resultado]: prevMarcador[resultado] + 1,
                }));
            }
        } else {
            setTurno(turno === "X" ? "O" : "X");
        }
    };
 
    const reiniciarJuego = () => {
        setTablero(new Array(9).fill(""));
        setGanador(null);
        const siguienteInicio = inicioTurno === "X" ? "O" : "X";
        setInicioTurno(siguienteInicio);
        setTurno(siguienteInicio);
    };
 
    return (
        <div>
            <h1>3 en Raya</h1>
            <div className="marcador">
                <p>Jugador X: {marcador.X}</p>
                <p>Jugador O: {marcador.O}</p>
            </div>
            <div className="estado">
                {ganador
                    ? ganador === "Empate"
                        ? "¡Es un empate!"
                        : `¡Ganador: ${ganador}!`
                    : `Turno de: ${turno}`}
            </div>
            <div className="tabla">
                {tablero.map((valor, index) => (
                    <Casilla
                        key={index}
                        numero={index}
                        valor={valor}
                        avisarPapa={trabajarParaHijo}
                    />
                ))}
            </div>
            <button onClick={reiniciarJuego}>Reiniciar juego</button>
        </div>
    );
}
 
export default Tablero;
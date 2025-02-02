import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import $negocio from "../services/negocio";

function CocheDetalle() {
  const { id } = useParams();
  const [coche, setCoche] = useState(null);

  useEffect(() => {
    setCoche($negocio.obtenerCoche(id));
  }, [id]);

  if (!coche) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{coche.marca} {coche.modelo}</h1>
      <p>Año: {coche.anno}</p>
      <p>Precio: {coche.precio}€</p>
      <p>Kilómetros: {coche.km} km</p>
      <p>Color: {coche.color}</p>
      <p>Combustible: {coche.combustible}</p>
      <p>Transmisión: {coche.transmision}</p>
      <p>Potencia: {coche.potencia} HP</p>
      <p>Puertas: {coche.puertas}</p>
      <p>Estado: {coche.estado}</p>
    </div>
  );
}

export default cocheDetalle;


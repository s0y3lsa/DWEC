// components/GestorTareas.jsx
import React, { useState, useEffect } from "react";
import Tarea from "./Tarea";
import { cargarTareas, guardarTareas } from "../core/storage";
 
function TareaPadre() {
    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState("abiertas");
    const [nuevaTarea, setNuevaTarea] = useState("");
 
    //cargar tareas desde LocalStorage al iniciar
    useEffect(() => {
        const obtenerTareas = async () => {
            const tareasGuardadas = await cargarTareas();
            setTareas(tareasGuardadas);
        };
        obtenerTareas();
    }, []);
 
    //guardar tareas en LocalStorage cuando cambien
    useEffect(() => {
        guardarTareas(tareas);
    }, [tareas]);
 
    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return;
 
        const nueva = {
            id: Date.now(),
            nombre: nuevaTarea,
            estado: false,
        };
 
        setTareas([...tareas, nueva]);
        setNuevaTarea("");
    };
 
    //cambiar el estado de una tarea
    const cambiarEstado = (id) => {
    };
 
    //eliminar una tarea
    const eliminarTarea = (id) => {
    };
 
    //filtrar tareas según el estado
    const tareasFiltradas =
        filtro === "todas"
            ? tareas
            : tareas.filter((tarea) => (filtro === "abiertas" ? !tarea.estado : tarea.estado));
 
    return (
        <div className="gestor-tareas">
            <h1>Gestor de Tareas</h1>
 
            <div className="nueva-tarea">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Escribe una nueva tarea"
                />
                <button onClick={agregarTarea}>Añadir Tarea</button>
            </div>
 
            <div className="filtros">
                <button onClick={() => setFiltro("abiertas")}>Abiertas</button>
                <button onClick={() => setFiltro("cerradas")}>Cerradas</button>
                <button onClick={() => setFiltro("todas")}>Todas</button>
            </div>
 
            <div className="lista-tareas">
                {tareasFiltradas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        cambiarEstado={cambiarEstado}
                        eliminarTarea={eliminarTarea}
                    />
                ))}
            </div>
        </div>
    );
}
export default TareaPadre;
 
 

import React from 'react';

const eliminarTarea = ({ task, onDelete, onToggleStatus }) => {
    const handleDelete = () => {
      if (window.confirm('¿Seguro que deseas eliminar esta tarea?')) {
        onDelete(task.id);
      }
    }
return (
    <div className="eliminarTarea">
      <span>{task.nombre}</span>
      <button onClick={() => onToggleStatus(task.id)}>
        {task.estado === 'abierta' ? 'Cerrar' : 'Abrir'}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default eliminarTarea;
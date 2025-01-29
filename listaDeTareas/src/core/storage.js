


// Cargar tareas desde LocalStorage
export async function cargaTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

// Guardar tareas en LocalStorage
export async function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}





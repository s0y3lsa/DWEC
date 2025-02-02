const coches = [
    { id: "1", marca: "Toyota", modelo: "Corolla", anno: 2020, km: 20000, color: "Blanco", precio: 15000, combustible: "Gasolina", transmision: "Automática", potencia: 120, puertas: 4, estado: "Disponible" },
    { id: "2", marca: "Ford", modelo: "Focus", anno: 2019, km: 30000, color: "Negro", precio: 13000, combustible: "Diésel", transmision: "Manual", potencia: 110, puertas: 4, estado: "Reservado" },
  ];
  
  const usuarios = [
    { nombre: "Admin", username: "admin", password: "1234" }
  ];
  
  const $negocio = {
    obtenerCoches: () => coches,
    obtenerCoche: (cocheId) => coches.find(coche => coche.id === cocheId),
    crearCoche: (coche) => coches.push(coche),
    actualizarCoche: (cocheActualizado) => {
      const index = coches.findIndex(c => c.id === cocheActualizado.id);
      if (index !== -1) coches[index] = cocheActualizado;
    },
    eliminarCoche: (cocheId) => {
      const index = coches.findIndex(c => c.id === cocheId);
      if (index !== -1) coches.splice(index, 1);
    },
    validarUsuario: (username, password) => usuarios.find(user => user.username === username && user.password === password) || false,
    limpiarLocalStorage: () => localStorage.clear(),
  };
  
  export default $negocio;
  
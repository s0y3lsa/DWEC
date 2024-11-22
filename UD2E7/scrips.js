document.addEventListener('DOMContentLoaded', () => {

// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('nav ul li a');
const contenedorResultados = document.querySelector('#contenedor-resultados');

 // Asigna eventos a cada enlace del menú
 menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto (cargar página)
        const href = link.getAttribute('href'); // Obtén el destino del enlace

         // Maneja la navegación según el enlace
         switch(href){
            case 'index.html':
                cargarInicio(contenedorResultados);
                break;
            case 'vehiculos.html':
                cargarVehiculos(contenedorResultados);
                break;
            case 'no-terminadas.html':
                cargarNoTerminadas(contenedorResultados);
                break;
            case 'no-pagadas-html':
                cargarNoPagadas(contenedorResultados);
                break;
            case 'presupuestos.html':
                cargarPresupuestos(contenedorResultados);
                break;
                default: contenedorResultados.innerHTML='<p>Pagina no encontrada</p>';
         }
    });
 });

    // Carga inicial de la página
    cargarInicio(contenedorResultados);
});

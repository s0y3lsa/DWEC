
import {BD} from '/.BD.js';
export class GestionMecanica {
    #clienteBD;
    #contenedor;
    constructor(contenedor) {
        this.#clienteBD = new BD();
        this.contenedor = contenedor;
    }
    //metodos publicos 

    inicarApp(selector) {
        // Buscar el elemento en el DOM por el selector proporcionado
        const contenedor = document.querySelector(selector);

         if (contenedor) {
        // Asociar el elemento encontrado a la propiedad 'contenedor'
        this.contenedor = contenedor;
        console.info("La aplicación se ha iniciado correctamente.");
        } else {
        // Mostrar un mensaje informativo si no se encuentra el elemento
        console.warn(`No se ha podido iniciar la aplicación. No se encontró un elemento con el selector '${selector}'.`);
    }
    }
    //metodos privados

    #generarHMTLBase() {
        return `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="vehiculos.html">Listado Vehículos</a></li>
                    <li><a href="no-terminadas.html">Listado No Terminadas</a></li>
                    <li><a href="no-pagadas.html">Listado No Pagadas</a></li>
                    <li><a href="presupuestos.html">Listado Presupuestos</a></li>
                </ul>
            </nav>
      </header>
      <main>
        <div id="contenedor-resultados">
          <!-- Aquí se mostrarán los formularios y resultados -->
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Gestión de Reparaciones</p>
      </footer>
      `
    }
        #generarHTMLInicio(){
            return `
        <h1>Buscar Vehículo</h1>
        <form id="buscador">
          <label for="matricula">Matrícula:</label>
          <input type="text" id="matricula" placeholder="Introduce matrícula">
         
          <label for="telefono">Teléfono:</label>
          <input type="text" id="telefono" placeholder="Introduce teléfono">
 
          <button type="button" onclick="buscarVehiculos()">Buscar</button>
        </form>
        <h2>Resultados</h2>
            <ul id="resultados">
                <!-- Los resultados aparecerán aquí -->
            </ul>
        `;
        }

        #generarHTMLVehiculos(vehiculos) {
            let HTML = `<div>`;
            for(let vehiculo of vehiculos) {
                HTML += `<div class="fila">
                    <div>${vehiculo.vehiculoId}</div>
                    <div>${vehiculo.matricula}</div>
                    <div>${vehiculo.marca}</div>
                    <div>${vehiculo.modelo}</div>
                    <div>${vehiculo.año}</div>
                    <div>${vehiculo.motor}</div>
                    <div>${vehiculo.propietario}</div>
            </div>
            `; }
        HTML += `<button class="crearVehiculo">Crear Vehiculo</button>`;
        HTML += `<button class="borrarVehiculo">Borrar Vehiculo</button>`;
        HTML += `<button class="obtenerReparaciones" >Ver Reparaciones</button> ` 
        HTML += `</div>`;
        return HTML;
        }

        #generarVehiculos(vehiculoId = null){
            let vehiculos = this.#clienteBD.obtenerVehiculos();

            for(let vehiculo of vehiculos){
                if(vehiculo.vehiculoId === vehiculoId){
                }
            }
            return `
                <h4>Propiedades del vehiculo</h4>
                <form>
                    <label for="vehiculoId">VehiculoID: </label>
                    <input type="text" id="vehiculoId">

                    <label for="matricula">Matricula: </label>
                    <input type="text" id="matricula">

                    <label for="marca">Marca: </label>
                    <input type="text" id="marca">

                    <label for="modelo">Modelo: </label>
                    <input type="text" id="modelo">

                    <label for="anio">Año: </label>
                    <input type="number" id="anio">

                    <label for="motor">Motor: </label>
                    <input type="text" id="motor">

                </form>
            `;
        }

        #generarHTMLReparaciones(vehiculoId){
            return `
            <section>
                <h2>Reparaciones del Vehículo</h2>
                <p>Matrícula: <span id="matricula">MATRÍCULA</span></p>
                <p>Teléfono: <span id="telefono">TELÉFONO</span></p>
                <button id="verVehiculo" data-id="${vehiculoId}">Ver Vehículo</button>
                <ul id="listaReparaciones"></ul>
            </section>
        `;   

        }

        #generarHTMLReparaciones(reparaciones){
            let HTML= `<div>`;
            for(let reparacion of reparaciones){
                HTML+= `<div class="fila>">`
                    `<div>${reparacion.reparaciónId}</div>
                    <div>${reparacion.vehiculoId}</div>
                    <div>${reparacion.descripcion}</div>
                    <div>${reparacion.fecha}</div>
                    <div>${reparacion.kilometro}</div>
                    <div>${reparacion.presupuesto}</div>
                    <div>${repacion.aprobada}</div>
                    <div>${reparacion.pagado}</div>
                    <div>${reparacion.terminado}</div>
                `
            }
            HTML+= `<button class="crearReparación" > Crear Reparacion</button>`;
            HTML +=`<div>`;
            return HTML;
        }

        #generarHTMLReparación(reparaciónId = 0, vehiculoId = 0){
                
            if(reparaciónId === 0){
                        

                }
                return `
                        <form id="formReparacion"> 

                            
                        </form>

                        
                        `
        }
}


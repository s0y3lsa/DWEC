
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

    
      `;
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
            `;
        }
        HTML += `<button class="crearVehiculo">Crear Vehiculo</button>`;
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
                    <label></label>
                </form>
            
                
            
            `;
        }

        #generarHTMLReparaciones(vehiculoId){

        }

        #generarHTMLReparaciones(reparaciones){

        }

        #generarHTMLReparación(reparaciónId = 0, vehiculoId = 0){

        }
    }
}

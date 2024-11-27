
import { juguete } from `/.juguete`;
import { datos } from `./datos`;

export class jugueteria {

    #contenedor;
    #juguetes;
    #contador;

    constructor(contenedor) {
        this.#contenedor = contenedor;
        this.#juguetes = [];

        let objJSON = datos;
        for (const juguete of objJSON.datos) {
            let juegueteN = new juguete(juguete.jugueteId, juguete.nombre, juguete.marca, juguete.precio)
            this.#juguetes.push(juegueteN);
        }
        this.#contador = 0;
    }

    //metodos 
    iniciarApp(selector) {
        this.#contenedor = document.querySelector(selector);
        if (!this.#contenedor) {
            alert('Error, no se encuentra el contenedor');
            return;
        }
    }
    //Devuelve una lista de juguetes filtrada por nombre, si no hay filtro se devuelve la lista completa
    obtenerJuguetes(filtro = "") {
        let resultado;
        if (filtro.trim.length < 0) {
            resultado = this.#juguetes;
        } else {
            for (let juguete of this.#juguetes) {
                if (juguete.nombre == filtro) {
                    resultado += juguete;
                }
            }
        }
        return resultado;
    }
    //Devuelve el juguete con el identificador indicado.
    obtenerJuguete(jugueteId) {
        for (let juguete of this.#juguetes) {
            if (juguete.jugueteId == jugueteId) {
                return juguete;
            }
        }
    }
    //Crea un nuevo juguete asignándole un identificador
    crearJuguete(nuevo) {
        const id = ++this.#contador;
        const juguete = new Juguete(id, nuevo.nombre, nuevo.marca, nuevo.precio);
        this.#juguetes.push(juguete);
        return juguete;
    }

    //Elimina el juguete con el identificador indicado 
    borrarJuguete(jugueteId) {
        this.#juguetes = this.#juguetes.filter(juguete => juguete.jugueteId !== jugueteId)
    }

    #navegarInicio() {
        const html = `
        ${this.generarHTMLNavegacion()}
        <div>
          <h1>Bienvenido a la Juguetería</h1>
          <p>Selecciona una opción del menú para empezar.</p>
        </div>
      `;
        this.#contenedor.innerHTML = html;
        // this.#asignarEventos();
    }

    #navegarListadoJuguetes() {
        const lista = this.obtenerJuguetes();

        const HTML = `
            ${this.generarHTMLNavegacion()}
            //
            //
        `;

    }

    #navegarPropiedades(juguete) {

    }

    #asignarEventos() {
        document.querySelector("#inicio-btn")?.addEventListener("click", () => this.#navegarInicio());
        document.querySelector("#listado-btn")?.addEventListener("click", () => this.#navegarListadoJuguetes());

    }

    generarHTMLNavegacion() {
        const html = `
            <nav>
                <button id="inicio-btn">Inicio</button>
                <button id="listado-btn">Listado de Juguetes</button>
            </nav>
        `;
        return html;
    }

    generarHTMLBuscador() {
        const html = `
             <form data-componente="buscador" name="jg-buscador"> 
                <input type="text" id="jg-buscador-filtro" placeholder="Buscar por nombre..." /> 
                <button type="submit">Buscar</button> 
            </form> 
        `;
        return html;
    }

    generarHTMLListado(listaJuguetes){
        const html = `
        <ul>
        ${listaJuguetes.map(juguete => `
            <li>
                ${juguete.nombre} (${juguete.marca}) - $${juguete.precio.toFixed(2)}
                <button onclick="app.#navegarPropiedades(${juguete.jugueteId})">Editar</button>
                <button onclick="app.borrarJuguete(${juguete.jugueteId}); app.#navegarListadoJuguetes()">Eliminar</button>
            </li>
          `).join("")}
      </ul>
    `;
    }



}
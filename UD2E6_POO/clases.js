


class Libro {

    libroID;
    titulo;
    autorld;
    blibliotecaId;
    prestamos;


    constructor(libroID, titulo, ISBN, autorld, blibliotecaId, prestamos) {

        this.libroID = libroID;
        this.titulo = titulo;
        this.ISBN = ISBN;
       
        this.blibliotecaId = blibliotecaId;
        this.autorld = autorld;
        this.prestamos = [];

    }


    // Getter para calcular la disponibilidad del libro
    get estaDisponible() {
        return !this.prestamos.some(prestamo => !prestamo.fechaDevolucion);
    }

    // metodos
    generarHTMLCreacion() {
        return `
        <form>
            <label>Titulo: </label>
            <input type="text" id="titulo" name="titulo"></input>

            <br></br>

            <label>ISBN: </label>
            <input type="text" id="titulo" name="titulo"></input>

            <br></br>
        
            <label>Autor: </label>
            <input type="text" id="autor" name="autor"></input>

            <br></br>
      
            <label>BibliotecaID: </label>
            <input type="text" id="autor" name="autor"></input>
        
            <br></br>

        </form>
        `;
    }
// Método para mostrar los detalles de un libro con opciones de menú
    generarHTMLPropiedades() {

        return `
            <div id="libro-${this.libroId}">
                    <h3>${this.titulo}</h3>
                    <p>ISBN: ${this.ISBN}</p>
                    <p>Autor ID: ${this.autorId}</p>
                    <p>Biblioteca ID: ${this.bibliotecaId}</p>
                    <p>Disponible: ${this.estaDisponible ? "Sí" : "No"}</p>
                    <button onclick="editarLibro(${this.libroId})">Editar</button>
                    <button onclick="borrarLibro(${this.libroId})">Borrar</button>
                    <button onclick="listarPrestamos(${this.libroId})">Listar Préstamos</button>
                    <button onclick="crearPrestamo(${this.libroId})">Solicitar Préstamo</button>
                    <button onclick="devolverPrestamo(${this.libroId})">Devolver Préstamo</button>
                </div>
        `;

    }

 // Método para generar el formulario de edición de un libro

 generarHTMLEdicion(){
     return `
        <form id="formEditarLibro-${this.libroId}">

            <input type="text" id="titulo-${this.libroId}" value="${this.titulo}"></input>
            <input type="text" id="ISBN" value="${this.ISBN}"></input>
        </form>
    `;
 }
// Listado de préstamos
 generarHTMLListadoPrestamos(){

    for(let prestamos of prestamo){
        


    }
 }




}


















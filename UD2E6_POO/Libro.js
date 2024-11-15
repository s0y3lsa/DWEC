
class Libro {
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
                    <button id="editarLibro(${this.libroId})">Editar</button>
                    <button id="borrarLibro(${this.libroId})">Borrar</button>
                    <button id="listarPrestamos(${this.libroId})">Listar Préstamos</button>
                    <button id="crearPrestamo(${this.libroId})">Solicitar Préstamo</button>
                    <button id="devolverPrestamo(${this.libroId})">Devolver Préstamo</button>
                </div>
        `;

    }

 // Método para generar el formulario de edición de un libro
 generarHTMLEdicion(){
     return `
        <h3>Editar Libro</h3>
            <form id="formulario-edicion-libro">
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" value="${this.titulo}" required />

                <label for="ISBN">ISBN:</label>
                <input type="text" id="ISBN" value="${this.ISBN}" required />

                <button type="button" id="guardarEdicion()">Guardar</button>
                <button type="button" id="libro.generarHTMLPropiedades()">Cancelar</button>
            </form>
    `;
 }
// Listado de préstamos
generarHTMLListadoPrestamos() {
    let prestamosStr;
    let numPrestamo;

    for (let prestamo of this.prestamos) {
        numPrestamo++;
        prestamosStr += numPrestamo + ". Fecha de prestamo: " + prestamo['fechaPrestamo'] + "Fecha de Devolucion: " + prestamo['fechaDevolucion'];
    }
}







}


















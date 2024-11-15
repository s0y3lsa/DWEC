
class Autor{


constructor(autorId,nombre,nacionalidad,biografia,libros){
    this.autorId=autorId;
    this.nombre=nombre;
    this.nacionalidad=nacionalidad;
    this.biografia=biografia;
    this.libros=[];
}

  // Método para añadir un libro al autor
  añadirLibro(libro) {
    this.libros.push(libro);
}

// Método para eliminar un libro del autor por su título
eliminarLibro(titulo) {
    this.libros = this.libros.filter(libro => libro.titulo !== titulo);
}

generarHTMLCreacion(){

    return `
        <form>
            <label>AutorId: </label>
            <input type="text" id="autorId" name="autorId"></input>

            <br></br>

            <label>Nombre: </label>
            <input type="text" id="nombre" name="nombre"></input>

            <br></br>
        
            <label>Nacionalidad: </label>
            <input type="text" id="nacionalidad" name="nacionalidad"></input>

            <br></br>

            <label>Biografia: </label>
            <input type="text" id="biografia" name="biografia"></input>

            <br></br>

            <label>Libros <label>
            <input type="text" id="libros" name="libros">            

        </form>
    `;
}

generarHTMLPropiedades(){

    ` <h3>Detelles del autor</h3>

        <p>AutorId: ${this.autorId}</p> 
        <p>Nombre del autor: ${this.nombre}</p> 
        <p>Nacionalidad: ${this.nacionalidad}</p> 
        <p>Biografia: ${this.biografia} </p> 


        <p>Libros </p>
    `;
}

generarHTMLEdicion(){
    return `
    <form id="formEditarAutor-${this.autorId}">
        <input type="text" id="nombre-${this.autorId}" value="${this.autorId}"></input>
        
    </form>
`;
}

}
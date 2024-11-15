
class Biblioteca{




constructor(bibliotecaId,nombre,ubicacion,libros){

    this.bibliotecaId=bibliotecaId;
    this.nombre=nombre;
    this.ubicacion=ubicacion;
    this.libros=[];
}


generarHTMLCreacion(){

    return `
    <form>
            <label>bibliotecaId: </label>
            <input type="text" id="bibliotecaId" name="bibliotecaId"></input>

            <br></br>

            <label>Nombre: </label>
            <input type="text" id="nombre" name="nombre"></input>

            <br></br>
        
            <label>Ubicacion: </label>
            <input type="text" id="ubicaion" name="ubicacion"></input>

            <br></br>
        
            <br></br>

        </form>
    `;
}

generarHTMLEdicion(){
    

}




}



export class Juguete{

    #jugueteId;
    nombre;
    marca;
    precio;

    constructor(jugueteId,nombre,marca,precio){
        this.#jugueteId=jugueteId;
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
    }


    //getter
    getJugueteId(){
        return this.#jugueteId;
    }

    getNombre(){
        return this.nombre;
    }

    getMarca(){
        return this.marca;
    }
    getPrecio(){
        return this.precio;
    }

    //set

    set nombre(value){
        this._nombre=value;
    }
    set marca(value){
        this._marca=value;
    }
    set precio(value){
        this._precio=value;
    }

    //metodos

    generarHTMLPropiedades(){
        return `
      <form id="juguete-form-${this.jugueteId}">
        <fieldset>
          <legend>Editar Propiedades del Juguete</legend>
          <label for="juguete-id-${this.jugueteId}">ID:</label>
          <input type="text" id="juguete-id-${this.jugueteId}" value="${this.jugueteId}" readonly>
          <br>
          <label for="juguete-nombre-${this.jugueteId}">Nombre:</label>
          <input type="text" id="juguete-nombre-${this.jugueteId}" value="${this.nombre}">
          <br>
          <label for="juguete-marca-${this.jugueteId}">Marca:</label>
          <input type="text" id="juguete-marca-${this.jugueteId}" value="${this.marca}">
          <br>
          <label for="juguete-precio-${this.jugueteId}">Precio:</label>
          <input type="number" id="juguete-precio-${this.jugueteId}" value="${this.precio}" min="0" step="0.01">
          <br>
          <button type="submit">Guardar</button>
        </fieldset>
      </form>
    `;
    }



}
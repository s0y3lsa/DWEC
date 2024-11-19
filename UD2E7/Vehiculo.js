
class Vehiculo{

    #vehiculoId;
    #matricula;
    #modelo;
    #año;
    #motor;
    #propietario;


    constructor(vehiculoId,matricula,modelo,año,motor){
        this.#vehiculoId=vehiculoId;
        this.#matricula=matricula;
        this.#modelo=modelo;
        this.#año=año;
        this.#motor=motor;
        this.#propietario=[];
    }


}

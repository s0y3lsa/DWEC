
import{datostaller} from `./datos-taller`;
import {vahiculos} from `/.vehiculo`;

export class  BD{

    #vehiculos;
    #reparaciones;
    #siguienteVehiculoId= 1;
    #siguienteRepracionId= 1;

    constructor(){
        let objJSON=datostaller;
        this.#vehiculos=[];
        for(let vehiculo of objJSON.vehiculos){
            let vehiculoN= new vehiculo(vehiculo.vehiculoId,vehiculo.matricula,vehiculo.marca,vehiculo.modelo,vehiculo.año,vehiculo.motor,vehiculo.propietario);
                this.#vehiculos.push(vehiculoN);
        }

        this.#reparaciones=[];

        for(let reparacion of objJSON.reparaciones){
            
            let reparacionN=new reparaciones(reparacion.reparacionId,reparacion.vehiculoId,reparacion.descripcion,reparacion.fecha,reparacion.kilometros,reparacion.presupuesto,reparacion.aprobada,reparacion.pagado,reparacion.terminado,reparacion.trabajos);

            this.#reparaciones.push(reparacionN);
        }
    }
    //metodos 

    //obtenerVehiculos(), devuelve la lista de vehículos.
    obtenerVehiculos(){
        return [...this.#vehiculos];
    }
    //
    obtenerVehiculo(filtro, valor){

        switch(filtro){
            case "vehiculoId":
                return this.#vehiculos.find(vehiculo=>vehiculo.id===valor);

            case "matricula":
                return this.#vehiculos.find(vehiculo=>vehiculo.matricula===valor);

            case "telefono":
                return this.#vehiculos.find(vehiculo=>vehiculo.propietario.telefono===valor);

            default:
                throw new Error(`Filtro no válido: ${filtro}`);
        }
    }
    crearVehiculo(vehiculo){
        this.#vehiculos.push(vehiculo);

    }
    borrarVehiculo(vehiculoId){

        this.#vehiculos = this.#vehiculos.filter(v => v.id !== vehiculoId);
    }
    obtenerReparaciones(filtro, valor){

        switch(filtro){
            case "fecha":
                return this.#reparaciones.find(reparaciones=>reparaciones.fecha===valor);

            case "pagado":
                return this.#reparaciones.find(reparaciones=>reparaciones.pagado===valor);
            case "terminado":
                return this.#reparaciones.find(reparaciones=>reparaciones.terminado===valor);
        }
    }
    obtenerReparacion(reparacionId){
        return this.#reparaciones.find(r => r.id === reparacionId);

    }
    crearReparación(vehiculoId, reparación){
        reparacion.reparacionIdid = this.siguienteReparacionId; // Asigna un ID único
        reparacion.vehiculoId = vehiculoId;         // Asocia la reparación al vehículo
        this.#reparaciones.push(reparacion);        // Agrega la reparación al array
    }
    borrarReparación(reparacionId){
        this.#reparaciones=this.#reparaciones.filter(r => r.id !==reparacionId);
    }

}
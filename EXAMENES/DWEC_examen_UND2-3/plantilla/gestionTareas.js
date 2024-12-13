import {datos} from './datos.js';

class gestionTareas{

    #tareaID;
    #titulo;
    #prioridad;
    #fechaRegistro;
    #fechaLimite;
    #descripcion;
    #responsable;
    #completada;
    
    

    constructor(tareaID,titulo,fechaRegistro,fechaLimite,descripcion,responsable,completada){
        this._tareaID=tareaID;
        this._titulo=titulo;
        this._fechaRegistro=fechaRegistro;
        this._fechaLimite=fechaLimite;
        this._descripcion=descripcion;
        this._responsable=responsable;
        this._completada=completada;
    
        tareas[];
        tareasJSON= JSON(datos);
        
        for(let tareas of tareasJSON){
            const tareasJSON=tareas.tareaID,tareas;titulo;tareas.fechaRegistro;tareas.prioridad,tareas.fechaRegistro,tareas.fechaLimite,tareas.descripcion,tareas.responsable,tareas.completada;
            tareas
        }
    };
    

};
function listarTareas() {
    return`
        <form>

            <label>Titulo: </label>
            <input type="text">

            <label>Prioridad: </label>
            <input type="text">

            <label>Fecha limite: </label>
            <input type="date">

            <label>Accion de borrar</label>
        </form> 
        `;
}
function crearTarea(){

}
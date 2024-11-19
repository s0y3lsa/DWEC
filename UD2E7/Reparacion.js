class Reparacion {





    constructor(reparacionId, vehiculoId, descripcion, fecha, kilometros, presupuesto, aprobada, pagado, terminado) {
      this.reparacionId = reparacionId;
      this.vehiculoId = vehiculoId;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.kilometros = kilometros;
      this.presupuesto = presupuesto;
      this.aprobada = aprobada;
      this.pagado = pagado;
      this.terminado = terminado;
      this.trabajos = []; // Lista de trabajos que es un array de objetos
    }
}
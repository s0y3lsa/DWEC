

class Linea {
    constructor(concepto, cantidad, precioUnitario) {
        this.concepto = concepto;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }
    get total() {
        return this.cantidad * this.precioUnitario;
    }
}

class Factura {
    clienteNIF;
    fecha;
    hora;
    pagada;
    lineas;
    constructor(clienteNIF, fecha, hora, pagada, lineas) {
        this.clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = pagada;
        this.lineas = [];
    }

    //getter
    get importeTotal() {
        return this.lineas.reduce((total, linea) => total + linea.total, 0);

    }

    get numeroArticulos() {
        return this.lineas.length;
    }


    //metodos 
    imprimirFactura() {
        let numLinea=0;

        let cadenaString="";
            cadenaString+= ('ClienteNIF:  ' + this.clienteNIF + "<br>"),
            cadenaString+= ('Fecha:  ' + this.fecha + "<br>"),
            cadenaString+= ('Hora:  ' + this.hora + "<br>" ),
            cadenaString+= ('Pagada: ' + (this.pagada ? 'si' : 'no') + "<br>");

        for(let linea of this.lineas){
            numLinea++;
            cadenaString+= (' - '+ numLinea + ' - ' +  "<br>");
            cadenaString+= ('Concepto:  ' + linea.concepto + "<br>");
            cadenaString+= ('Cantidad:  ' + linea.cantidad + "<br>");
            cadenaString+=('PrecioUnitario:  '+ linea.cantidad + "<br>");
        }
        return cadenaString;
    }
    agregarLinea(concepto, cantidad, precio) {
        this.lineas.push(new Linea(concepto, cantidad, precio));
    }
    eliminarLinea() {
         this.lineas.pop;
    }
}
// Clase de utilidades
class Utilidades {

    static serializarFactura(facturaOBJ) {
        return JSON.stringify(facturaOBJ, null, 2);
    }

    static deserializarFactura(facturaJSON) {
        let data = JSON.parse(facturaJSON);
        let factura = new Factura(data.clienteNIF, data.fecha, data.hora, data.pagada);
        factura.lineas=data.lineas.map(linea =>  new Linea(linea.concepto, linea.cantidad, linea.precioUnitario));
    
        return factura;
    }

}
let factura = new Factura("", "", "", false);


function actualizarDatosFactura() {
    factura.clienteNIF = document.getElementById("clienteNIF").value;
    factura.fecha = document.getElementById("fecha").value;
    factura.hora = document.getElementById("hora").value;
     // Verificamos cuál radio está seleccionado y asignamos el valor correspondiente
    factura.pagada = document.getElementById("pagadaSi").checked;
 
    actualizarFactura();
}

function agregarLinea() {
    const concepto = document.getElementById("concepto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    factura.agregarLinea(concepto, cantidad, precio);
    actualizarFactura();
}

function eliminarLinea() {
    factura.eliminarLinea();
    actualizarFactura();
}

function serializarFactura() {
    document.getElementById("salida").value = Utilidades.serializarFactura(factura);
}

function deserializarFactura() {
    const facturaJSON = document.getElementById("entrada").value;
    factura = Utilidades.deserializarFactura(facturaJSON);
    actualizarFactura();
}

function actualizarFactura() {
    document.getElementById("impresion").innerHTML = factura.imprimirFactura();
}


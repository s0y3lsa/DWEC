'use strict';

let productos={};

    
/*
Función “agregarProducto(nombre, cantidad, precio, categoría)” que añada el
producto si no existe. Si el producto ya existe muestra un alert indicando que el
producto ya existe
*/


function agregarProducto(nombre,cantidad,precio,categoria){

        if(nombre in productos){
            alert('Producto');
        }

        let producto={
            cantidad:cantidad,
            precio:precio,
            categoria:categoria,

        }

        //lo añade al array
        producto[nombre]=producto;
        alert('Producto '+ nombre  + ' añadido');
};

/*
Función “eliminarProducto(nombre)” que elimina el producto del inventario. Si el
producto no existe muestra un alert indicando que producto no existe
*/

function eliminarProducto(nombre){

    //si le encuentra le eilimina
    if(nombre in productos){
        delete(productos[nombre]);
        alert('Producto eliminado');
    }else{
        alert('El producto no existe, no se pudo eliminar');
    }

};

/*
Función “buscarProducto(nombre)” que devuelve el objeto con la información
del producto
*/
function buscarProducto(nombre){
    
    if(nombre in productos){
        
        alert('El producto encontrado: ');
        alert(
        'Nombre '+ productos[nombre] + '\n' +
        'Cantidad '+ productos[nombre].cantidad + '\n' +
        'Precio '+ productos[nombre].precio + '\n' +
        'Categoria ' + productos[nombre].categoria);

    }else{
        alert('El producto no ha sido encontrado');
    }
};
/*
Función “actualizarInventario(nombre, cantidad)” incrementa o decrementa el
stock según la cantidad indicada. Si la reducción deja el stock a 0 se mostrará un
alert solicitando la reposición
*/
function actualizarInventario(nombre,cantidad){

    if(productos in nombre ){

        productos[nombre].cantidad +=cantidad;

    }else if( productos[nombre].cantidad ===0){
       alert('solicitando reposicion...')
    }
};
/*
Función “ordenarProductosPorPrecio()” devuelve una lista ordenada de forma
ascendente. El resultado es un nuevo array, cuidado que no tienes el nombre.
*/
function ordenarProductosPorPrecio(){

    productos=array


}
//funciones 
agregarProducto('platanos',10,5.0,'fruteria');
agregarProducto('manzanas',5,5.0,'fruteria');

buscarProducto('platanos');
buscarProducto('manzanas');

eliminarProducto('platanos');
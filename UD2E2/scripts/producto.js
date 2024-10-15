'use strict';



const $negocio = (function () {

    //array asociativo 
    let productos = {};


    /*
    Función “agregarProducto(nombre, cantidad, precio, categoría)” que añada el
    producto si no existe. Si el producto ya existe muestra un alert indicando que el
    producto ya existe
    */

    function agregarProducto(nombre, cantidad, precio, categoria) {
        if (nombre in productos) {
            alert('El producto ya existe');
            return;
        }
        let producto = {
            cantidad: cantidad,
            precio: precio,
            categoria: categoria,
        }
        //lo añade al array
        productos[nombre] = producto;
        alert('Producto ' + nombre + ' añadido');
    }

    /*
    Función “eliminarProducto(nombre)” que elimina el producto del inventario. Si el
    producto no existe muestra un alert indicando que producto no existe
    */

    function eliminarProducto(nombre) {
        //si le encuentra le eilimina
        if (nombre in productos) {
            delete (productos[nombre]);
            alert('Producto eliminado');
        } else {
            alert('El producto no existe, no se pudo eliminar');
        }

    }

    /*
    Función “buscarProducto(nombre)” que devuelve el objeto con la información
    del producto
    */
    function buscarProducto(nombre) {
        if (nombre in productos) {
            alert(
                'Datos del producto ' + "\n"
                + 'Nombre: ' + nombre + "\n"
                + 'Cantidad: ' + productos[nombre].cantidad + "\n"
                + 'Precio: ' + productos[nombre].precio + "\n"
                + 'Categoria: ' + productos[nombre].categoria + "\n"
            );
        } else {
            alert('No existe ese producto');
        }
    }


    /*
    Función “actualizarInventario(nombre, cantidad)” incrementa o decrementa el
    stock según la cantidad indicada. Si la reducción deja el stock a 0 se mostrará un
    alert solicitando la reposición
    */
    function actualizarInventario(nombre, cantidad) {
        if (nombre in productos) {
            productos[nombre].cantidad += cantidad;
            alert('Producto actualizado ');
            buscarProducto(nombre);

            if (productos[nombre].cantidad == 0) {
                alert('No hay stock, se necesita reposicion');
            }
        } else {
            alert('No existe ese producto, no se realizara ningun cambio');
        }
    }
    /*
    Función “ordenarProductosPorPrecio()” devuelve una lista ordenada de forma
    ascendente. El resultado es un nuevo array, cuidado que no tienes el nombre.
    */
    function ordenarProductosPorPrecio() {
        let datosEnArray = Object.entries(productos); //lo pasa a un array normal
        let datosFormateados = datosEnArray.map(([nombre, valor]) => ({ nombre, ...valor }));
        //es un foreach a una coleccion nueva con un formato personalizado
        let datosOrdenados = datosFormateados.sort((a, b) => a.precio - b.precio);
        return datosOrdenados;
    }
    /*Función “imprimirInventario()” devuelve una lista con el informe de inventario, el
    cual muestra el “nombre”, “categoría”, “cantidad”, “precio” y “total”
    (cantidad*precio)*/
    function imprimirInventario() {
        for (let nombre in productos) {
            let producto = productos[nombre];
            alert(
                "Datos de " + nombre + ": " + "\n" +
                "Nombre: " + nombre + "\n" +
                "Cantidad: " + producto.cantidad + "\n" +
                "Precio: " + producto.precio + "\n" +
                "Categoría: " + producto.categoria + "\n" +
                "Total: " + (producto.cantidad * producto.precio) + "\n"
            );
        }
    }


    /*filter(): Filtra el inventario y devuelve solo los productos 
    cuya categoría coincida con la categoría proporcionada.*/
    function filtrarProductosPorCategoria(categoria) {

        for (let nombre in productos) {
            let producto = productos[nombre];
            if (producto.categoria === categoria) {
                alert(
                    'Productos por categoria: ' + "\n" +
                    'Categoria: ' + producto.categoria + "\n" +
                    'Nombre del producto: ' + nombre + "\n" +
                    'Cantidad ' + producto.cantidad + "\n" +
                    'Precio ' + producto.precio + "\n"
                );
            }
        }
    }

    return {
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarInventario,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria
    };


})();

// Asociación de controles HTML
window.addEventListener('load', function () {

    document.getElementById('agregarBtn').addEventListener('click', function () {

        const nombre = document.getElementById('nombreProducto').value;
        const cantidad = document.getElementById('cantidadProducto').value;
        const precio = document.getElementById('precioProducto').value;
        const categoria = document.getElementById('categoriaProducto').value;
        $negocio.agregarProducto(nombre, cantidad, precio, categoria);
    });

    document.getElementById('eliminarBtn').addEventListener('click', function () {
        const nombre = document.getElementById('nombreProducto').value;
        if (confirm('¿Está seguro de que desea eliminar este producto?')) {
            $negocio.eliminarProducto(nombre);
        }
    });

    document.getElementById('buscarBtn').addEventListener('click', function () {
        const nombre = document.getElementById('nombreProducto').value;
        const resultado = $negocio.buscarProducto(nombre);
        if (resultado) {
            document.getElementById('resultado').innerHTML = JSON.stringify(resultado);
        }
    });

    document.getElementById('actualizarBtn').addEventListener('click', function () {
        const nombre = document.getElementById('nombreProducto').value;
        const cantidad = document.getElementById('cantidadProducto').value;
        $negocio.actualizarInventario(nombre, cantidad);
    });

    document.getElementById('ordenarBtn').addEventListener('click', function () {
        const resultado = $negocio.ordenarProductosPorPrecio();
        document.getElementById('resultado').innerHTML = JSON.stringify(resultado);
    });

    document.getElementById('imprimirBtn').addEventListener('click', function () {
        const resultado = $negocio.imprimirInventario();
        document.getElementById('resultado').innerHTML = JSON.stringify(resultado);
    });

    document.getElementById('filtrarBtn').addEventListener('click', function () {
        const categoria = document.getElementById('categoriaProducto').value;
        const resultado = $negocio.filtrarProductosPorCategoria(categoria);

        document.getElementById('resultado').innerHTML = JSON.stringify(resultado);
    });





});





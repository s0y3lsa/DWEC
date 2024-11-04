/*
Ejercicio 8. Máquina de cambio.
Escribe una función que reciba un importe en euros y devuelva en un array el importe
introducido como parámetro repartido en billetes de 200, 100, 50, 10, 5 y monedas de 2 y
1 euros. La devolución empleara siempre la moneda de mayor valor disponible.
Para probarlo crea una web que incluya los campos de entrada “Importe producto”,
“Importe entregado” un botón para “Cobrar”. Y como elementos de salida un contenedor
para el “importe total a devolver” y otro contenedor “cambio” en el que se muestre la
devolución resultado de la llamada a la función, formatea la salida para mostrar cada
valor devuelto en una línea nueva. 

*/


function importeEuros(importe){

    const billetesYMonedas = [200, 100, 50, 10, 5, 2, 1];
    const resultado = [];

    for (const valor of billetesYMonedas) {
        const cantidad = Math.floor(importe / valor);
        if (cantidad > 0) {
            resultado.push(`${cantidad} x ${valor}€`);
            importe -= cantidad * valor;
        }
    }

    return resultado;

}
function cobrar() {
    const importeProducto = parseFloat(document.getElementById("importeProducto").value);
    const importeEntregado = parseFloat(document.getElementById("importeEntregado").value);

    if (isNaN(importeProducto) || isNaN(importeEntregado) || importeEntregado < importeProducto) {
        alert("Por favor, asegúrate de que el importe entregado es suficiente.");
        return;
    }
    const cambio = importeEntregado - importeProducto;
    document.getElementById("importeTotal").textContent = `Total a devolver: ${cambio.toFixed(2)}€`;
    document.getElementById("cambio").innerHTML = calcularCambio(cambio).join("<br>");
}
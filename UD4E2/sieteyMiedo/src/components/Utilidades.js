
export const baraja = Array.from({ length: 40 }, (_, index) => {
    const paloIndex = Math.floor(index / 10);
    const palos = ["Oros", "Copas", "Espadas", "Bastos"];
    const numero = (index % 10) + 1;
    const valor = numero > 7 ? 0.5 : numero;
    return {
      id: index + 1,
      palo: palos[paloIndex],
      numero: numero > 7 ? ["Sota", "Caballo", "Rey"][numero - 8] : numero,
      valor,
    };
  });
   
export function barajarCartas(){
    //generar array del 1 hasta el 40 
    const indices= Array.from({length:40},(_,i)=>i+1); 
    return indices.sort(()=>Math.random()-0.5);
}
export function sumarCartas(cartasJugador){
    return cartasJugador.reduce((total,id)=>{
        const cartasJugador=recuperarCarta(id);
        return total +cartasJugador.valor;
    },0);
}
export function recuperarCarta(identificador){
    return baraja.find(carta=>carta.id===identificador);
}
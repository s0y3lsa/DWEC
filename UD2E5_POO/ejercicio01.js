
/*
Ejercicio 1.
A partir de la clase Persona, con la siguiente estructura:
• Campos: “nombre”, “nacimiento” (fecha) y “hobbies“ (lista de cadenas).
• Propiedades: “edad” (get), computada a partir de nacimiento.
• Métodos: “Saludar”, devuelve la cadena “Hola, me llamo NOMBRE y me gusta
LISTA_HOBBIES”.
Se pide:
Define y prueba la clase “Persona” según los 3 formatos de definición de clases
soportados por JS: objeto literal, función constructora y ES6.
*/

const persona = {

    nombre: 'Pepe',
    necimiento: '2000-01-01',
    hobbies: ['leer', 'escribbir', 'correr'],

    saludar: function () {
        console.log(`Hola,me llamo ${this.nombre} y me gusta ${this.hobbies}`);
    }
};
persona.saludar();

//Definición mediante función constructora

function Persona(nombre,nacimiento,hobbies){

    this.nombre=nombre;
    this.nacimiento=nacimiento;
    this.hobbies=hobbies;
    this.saludar=function (){
        console.log(`Hola, me llamoo ${this.nombre} y me gusta ${this.hobbies}`);
    }
}
const persona1 = new Persona(
    'Luis',
    '2004-17-08',
    ['leer','escribir','correr'],
);
persona1.saludar();

//Definición mediante clase ES6
class PersonaES6{
    constructor(nombre,nacimiento,hobbies){
        this.nombre=nombre;
        this.nacimiento=nacimiento;
        this.hobbies=hobbies;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y me gusta ${this.hobbies}`);
    }
}
const persona2 = new PersonaES6(
    'Paula',
    '2004-12-02',
    ['leer','escribir','ver anime']
);
persona2.saludar();



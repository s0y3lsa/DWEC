
/*
Primera parte
Crea una función constructora “Animal” que reciba como parámetros el tipo y el nombre.
Contamos con 3 tipos de animal: “animal” (genérico), “perro” y “gato”.
La clase contará con 3 métodos:
• “comer”, devuelve la cadena “nombre está comiendo”.
• “dormir”, devuelve la cadena “nombre está durmiendo”.
• “hacerRuido”, devuelve una cadena distinta según el tipo, por ejemplo, para el tipo
perro “nombre hace guau”.
Codifícalo de la manera más correcta posible.
Segunda parte
Vuelve a codificar la clase Animal empleando herencia con el formato ES6.
*/


function Animal(tipo,nombre){

    this.tipo=tipo;
    this.nombre=nombre;

    this.comer=function(){
        console.log(`${this.nombre} esta comiendo`);
    }
    this.dormir=function(){
        console.log(`${this.nombre} esta durmiendo`);
    }
    this.hacerRuido=function(){
        if(this.tipo==='perro'){
            console.log(`${this.nombre} hace guao `);
        }else if(this.tipo==='gato'){
            console.log(`${this.nombre} hace miau`);
        }
        
    }
}
const animal1= new Animal(
    'perro',
    'Lucas'
);
animal1.comer();
animal1.dormir();
animal1.hacerRuido();

const animal2= new Animal(
    'gato',
    'Misha'
);
animal2.comer();
animal2.dormir();
animal2.hacerRuido();

// Clases de ES6

class AnimalES6 {
    constructor(nombre,tipo){
        this.tipo=tipo;
        this.nombre=nombre;
    }
    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }
    dormir(){
        console.log(`${this.nombre} esta durmiendo`);
    }
    hacerRuido(){
        
    }
}
const animal3= new AnimalES6(
    'Mishifu',
    'gato'
    
);
animal3.comer();
animal3.dormir();
animal3.hacerRuido();

//Herencia
class Perro extends AnimalES6{
    constructor(nombre){
        super(nombre);
    }
    //sobre escribe el metodo hacerRuido()
    hacerRuido(){
        console.log (`${this.nombre} hace wao`);
    }

}
const animalP= new Perro('Laika');
animalP.comer();
animalP.dormir();
animalP.hacerRuido();

// 
class Gato extends AnimalES6{
    constructor(nombre){
        super(nombre);
    }
    //sobre escribe el metodo hacerRuido
    hacerRuido(){
        console.log (`${this.nombre} hace MIAUU`);
    }
}
const animalP2= new Gato(`Michuni`);
animalP2.comer();
animalP2.dormir();
animalP2.hacerRuido();





import {Libro} from `./libro.js`;
import{Autor} from `./autor.js`;


import{datosInciales} from './datos.js';

const biblio= (function(){


     // ID autoincrementales
     let libroId = 1;
     let autorId = 1;
     let bibliotecaId = 1;

     let objJSON = JSON.parse(datosIniciales);
 
    let autores=[];
    for(let autor of objJSON.autores) {
        let autorN = new Autor(autor.autorId, autor.nombre,autor.nacionalidad,autores.biografia);
        autores.push(autorN);   
    }
    
    let libros=[];
    for(let libro of objJSON.Libros){
        let libroN= new Libro(libro.libroId,libro.titulo,libro.ISBN,libro.autorId,libro.bibliotecaId,libro.prestamos);
        
        let prestamoN = new Prestamo(prestamo.fechaPrestamo,prestamo.fechaDevolucion);
        for(let prestamo of libroN.prestamos){
            libroN.push(prestamo);
        }
        libro.push(libroN);
    }

    let bibliotecas = [];
    for(let biblio of objJSON.bibliotecas){
        let biblioN= new Biblioteca(biblio.bibliotecaId,biblio.nombre,biblio.ubic);
        bibliotecas.push(biblioN);
    }

     return{

     
     generarHTMLListadoAutores(){
        return `
            <form>
                <h3>Listado de autores</h3>
                <p>Crear autor </p>
                <p>Ver autor</p>
                <p>Editar autor</p>
                <p>Borrar autor</p>
            </form>
        `;
    },

   generarHTMListadoBibliotecas(){
        
        return bibliotecas.map(Biblioteca =>`
            <div>
                <h3>${Biblioteca.nombre}</h3>
                <input type="button" id="gestorBiblioteca.verBiblioteca(${biblioteca.id})">Ver</input>
                <input type="button" id="gestorBiblioteca.borrarBiblioteca(${biblioteca.id})">Borrar</input>
            </div>
            `
         ).join("");
        
    },

    generarHTMLListadoLibros(){

            return libros.map(Libro=>`
            <div>
                <h3>${Libro.nombre}</h3>
                <input type="button" id="gestorBiblioteca.crearLibro(${libro.id})">Crear libro</input>
                <input type="button" id="gestorBiblioteca.borrarLibro(${libro.id})">Borrar libro</input>
                <input type="button" id="gestorBiblioteca.edirr
                <input type=""
            </div>
            `).join("");
    },

     // Funciones auxiliares privadas
      cargarDatosIniciales : () => {
        // Aquí puedes cargar datos iniciales desde datos.js
        // Ejemplo: libros = [...];
        console.log("Datos iniciales cargados.");
    },

     generarID: (tipo) => {
        if (tipo === "libro") return libroId++;
        if (tipo === "autor") return autorId++;
        if (tipo === "biblioteca") return bibliotecaId++;
    },

    buscarPorID : (coleccion, id) => coleccion.find(item => item.id === id),

    buscarLibrosPorTitulo: (titulo) => {
        return libros.filter(libro => libro.titulo.includes(titulo));
    },
    buscarLibro:(libroId) => {
        for(let libro of libros){
            if(libro.libroId === libroId){
                return libro;
            }
        }
    },
    buscarBiblioteca:(bibliotecaId) => {
        for(let biblio of bibliotecas){
           if(biblio.bibliotecaId === bibliotecaId){
                return biblio;
           }
        }
    },
    crearLibro: (libro) => {
        libro.id = generarID("libro");
        libros.push(libro);
    },

    crearAutor: (autor) => {
        autor.id = generarID("autor");
        autores.push(autor);
    },

    crearBiblioteca: (biblioteca) => {
        biblioteca.id = generarID("biblioteca");
        bibliotecas.push(biblioteca);
    },

    borrarLibro: (id) => {
        libros = libros.filter(libro => libro.id !== id);
    },
    borrarAutor: (id) => {
        autores = autores.filter(autor => autor.id !== id);
    },

    borrarBiblioteca: (id) => {
        bibliotecas = bibliotecas.filter(biblioteca => biblioteca.id !== id);
    },
    }

}) ();
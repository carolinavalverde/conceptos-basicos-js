// esto es un comentario de una linea

/* este es un comentario 
 de multiples lineas */

// declarar una variable (var - let - const)

let anioActual = 2023;
const universe = "https://universe.rollingcodeschool.com/"

// mostrar mensajes
console.log(anioActual);
console.log('anioActual');
console.log("Año Actual: " + anioActual);
console.log(universe);

// modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

document.write('<p class="parrafoDestacado" >esto es una prueba de document.write</p>')

// ventanas emergentes
alert('Hola Mundo');

// solicitar un usuario un nombre y mostrar un mjs
const nombreUsuario = prompt('Ingrese un nombre');

console.log(nombreUsuario);

document.write('<p>Bienvenido '+nombreUsuario + '</p>');

// solicitar a un usuario el precio de un producto en dolares
const precioSolicitado = (parseFloat(prompt'Ingrese un valor en dolares'));
// alert('El importe solicitado corresponde a $'+(precioSolicitado * 1100) + 'pesos argentinos');

// parseInt ('50')
// parseFloat ('50.04')
alert('El importe solicitado corresponde a USD$'+(precioSolicitado + 2));



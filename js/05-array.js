const personajes = [];

const peliculas = ['Interestellar', 'matrix', 'lotr', 2023, true, 'los juegos del hambre'];

// muestro el arreglo
console.log(peliculas);
document.write(peliculas);//raro querer mostrar todo xq no se ve bien

//entonces se muestra uno:
document.write(`<p>El primer elemento de array es: ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El ultimo elemento del array es: ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Un elemento de array es: ${peliculas[20]}</p>`);

document.write(`<h2>Lista de Películas</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);
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

//agregar elementos al array
peliculas.unshift("Batman","Ironman 1");
document.write(`<h2>Lista de Películas, con dos pelis nuevas (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

peliculas.splice(3, 0, "Scream");//agrego elemento en medio del array
document.write(`<h2>Lista de Películas, agregamos la peli Scream (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

//agrego elemento al final del array, push
peliculas.push("Gran Turismo");
document.write(`<h2>Lista de Películas, agregamos la peli Gran Turismo (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

//modificar elementos del array
peliculas[6] = "Inception";
document.write(`<h2>Lista de Películas, modificamos el elemento de la posision 6 del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

//borrar el primer elemento del array
peliculas.shift();
document.write(`<h2>Lista de Películas, eliminamos el primer elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

//borrar elementos del medio del array
peliculas.splice(6, 1);//agrego elemento en medio del array
//peliculas.splice(6, 2);//borro dos elementos desde la posición q especifico hasta el segun nr, dos numeros 
//peliculas.splice(6);//borra desde la posición 6 en adelante
document.write(`<h2>Lista de Películas, eliminamos el elemento de la posicion 6 (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);

//eliminar el ultimo elemento del array
peliculas.pop();
document.write(`<h2>Lista de Películas, eliminamos el ultimo elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write(`</ul>`);
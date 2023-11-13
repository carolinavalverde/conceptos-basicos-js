const personajes = [];
const peliculas = ['Interestellar', 'matrix', 'lotr', 2023, true, 'los juegos del hambre'];

const mostrarPeliculas = (titulo) => {
    document.write(`<h2>${titulo}</h2>`);
    document.write(`<ul>`);
    for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
        document.write(`<li>${peliculas[indicePeliculas]}</li>`);
    }
    document.write(`</ul>`);
}

// muestro el arreglo
console.log(peliculas);
document.write(peliculas);//raro querer mostrar todo xq no se ve bien

mostrarPeliculas(`Lista de Peliculas`);
//puedo cambiar todos os h2 por los titulos y mostrar peliculas sin tantos document.write, para mejores practicas

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
mostrarPeliculas(`Lista de Películas, con dos pelis nuevas (${peliculas.length})`);

peliculas.splice(3, 0, "Scream");//agrego elemento en medio del array
mostrarPeliculas(`Lista de Películas, agregamos la peli Scream (${peliculas.length})`);

//agrego elemento al final del array, push
peliculas.push("Gran Turismo");
mostrarPeliculas(`Lista de Películas, agregamos la peli Gran Turismo (${peliculas.length})`);

//modificar elementos del array
peliculas[6] = "Inception";
mostrarPeliculas(`Lista de Peliculas, modificamos el elemento de la posision 6 del array (${peliculas.length})`);

//borrar el primer elemento del array
peliculas.shift();
mostrarPeliculas(`Lista de Películas, eliminamos el primer elemento del array (${peliculas.length})`);

//borrar elementos del medio del array
peliculas.splice(6, 1);//agrego elemento en medio del array
//peliculas.splice(6, 2);//borro dos elementos desde la posición q especifico hasta el segun nr, dos numeros 
//peliculas.splice(6);//borra desde la posición 6 en adelante
mostrarPeliculas(`Lista de Películas, eliminamos el elemento de la posicion 6 (${peliculas.length})`);

//eliminar el ultimo elemento del array
peliculas.pop();
mostrarPeliculas(`Lista de Películas, eliminamos el ultimo elemento del array (${peliculas.length})`);


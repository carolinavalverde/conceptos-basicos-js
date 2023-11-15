//nombre, tipo, peso, altura, evolucion, ataque, nropokedex, fuerza
//fuerza max 15

class Pokemon {
  #tipo; //propiedad privada
  //el primer metodo que se ejeucta automaticamente al crear un objeto- metodo constructor
  constructor(
    nombre,
    tipo,
    peso,
    altura,
    evolucion,
    ataque,
    nroPokedex,
    fuerza
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.peso = peso;
    this.altura = altura;
    this.evolucion = evolucion;
    this.ataque = ataque;
    this.nroPokedex = nroPokedex;
    this.fuerza = fuerza;
  }
  //propiedades computadas: get(devuelve el dato privado) y set(modifica el dato privado)
  get tipo() {
    return this.#tipo;
  }
  set tipo(nuevoTipo) {
    this.#tipo = nuevoTipo;
  }

  //metodos
}

const charmander = new Pokemon(
  `Charmander`,
  `fuego`,
  15,
  1.2,
  [`charmeleon`, `charizard`],
  [`blaze`, `ascuas`, `lanzallamas`],
  4,
  4
);
console.log(charmander);
document.write(`<h2>Pokemon: ${charmander.nombre}<h2>`);
document.write(`<h2>Tipo: ${charmander.tipo}<h2>`);

charmander.tipo = `fuego 2`;
document.write(`<h2>Tipo: ${charmander.tipo}<h2>`);


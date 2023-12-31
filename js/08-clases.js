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
    this.estado = true; //valor por defecto
  }
  //propiedades computadas: get(devuelve el dato privado) y set(modifica el dato privado)
  get tipo() {
    return this.#tipo;
  }
  set tipo(nuevoTipo) {
    this.#tipo = nuevoTipo;
  }

  //metodos
  mostrarDatos() {
    document.write(`<h2>Pokemon: ${this.nombre}</h2>
    <ul>
    <li>Tipo: ${this.tipo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Evolucion: ${this.evolucion}</li>
    <li>Nro Pokedex: ${this.nroPokedex}</li>
    </ul>`);
  }
}

class PokemonLegendario extends Pokemon {
  #rareza;
  #ataqueEspecial;
  constructor(
    nombre,
    tipo,
    peso,
    altura,
    evolucion,
    ataque,
    nroPokedex,
    fuerza,
    rareza,
    ataqueEspecial
  ) {
    super(nombre, tipo, peso, altura, evolucion, ataque, nroPokedex, fuerza);
    this.#rareza = rareza;
    this.#ataqueEspecial = ataqueEspecial;
  }

  get rareza() {
    return this.#rareza;
  }
  set rareza(nuevaRareza) {
    if (nuevaRareza.length >= 3 && nuevaRareza.length <= 10) {
      this.rareza = nuevaRareza;
    } else {
      alert("Ingresaste un valor erróneo");
    }
  }
  get ataqueEspecial() {
    return this.#ataqueEspecial;
  }
  set ataqueEspecial(nuevaRareza) {
    this.#ataqueEspecial = nuevaRareza;
  }

  //agregar mas metodos
  mostrarDatosNuevos() {} //le agrego las nuevas propiedades
  //polimorfismo
  mostrarDatos() {
    document.write(`<h2>Pokemon: ${this.nombre}</h2>
    <ul>
    <li>Nro Pokedex: ${this.nroPokedex}</li>
    <li>Tipo: ${this.tipo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Evolucion: ${this.evolucion}</li>
    <li>Rareza: ${this.rareza}</li>
    <li>Ataques Especiales: ${this.ataqueEspecial}</li>
    </ul>`);
  }
}

//crear o instancear un objeto
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
const togepi = new Pokemon(
  `Togepi`,
  `hada`,
  1.5,
  0.3,
  [`togetic`, `togekiss`],
  [`gracia serena`, `dicha y entusiasmo`, `placaje`],
  175,
  2
);

console.log(charmander);
document.write(`<h2>Pokemon: ${charmander.nombre}<h2>`);
document.write(`<h2>Tipo: ${charmander.tipo}<h2>`);

charmander.tipo = `fuego 2`;
document.write(`<h2>Tipo: ${charmander.tipo}<h2>`);

charmander.mostrarDatos();

togepi.mostrarDatos();

const mewtwo = new PokemonLegendario(
  `Mewtwo`,
  `psiquico`,
  122,
  2,
  [],
  [`confución`, `placaje`],
  150,
  7,
  `Infrecuente`,
  [`charge beam`, `electro ball`]
);

mewtwo.mostrarDatos();

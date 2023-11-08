//funciones declarativas
function saludar(){
    //todo el codigo que sabe hacer la funcion
    document.write(`<p>Hola Mundo</p>`);
}

function saludarNuevo(nombreSolicitado, apellidoSolicitado){
    document.write(`<p>Hola ${nombreSolicitado}, ${apellidoSolicitado} 😊</p>`);
}

//funcion que retorna un resultado
function multiplicar(nro1, nro2){
    const resultado = nro1 * nro2;
    console.log(resultado);
    return resultado;
}

//llamar o invocar a una funcion
saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

saludarNuevo(nombre, apellido);
saludarNuevo('Jocker');
saludarNuevo('Harry', 'Potter');

const resultadoNuevo = multiplicar(30, 3);
document.write(`<p>El resultado de la multiplicacion fue: ${resultadoNuevo}</p>`);
document.write(`<p>El resultado de la multiplicacion fue: ${multiplicar(30, 3)}</p>`);


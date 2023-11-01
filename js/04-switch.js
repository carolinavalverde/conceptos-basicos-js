const opcion = prompt(
  `Seleccione una opción: 1- consulte el saldo, 2- inserte dinero, 3- extreiga dinero`
);

let saldo = 0;
console.log(opcion.toLowerCase());
// transforma en minuscula las letras
opcion = opcion.toLowerCase();

// if(opcion === `1`){
//     document.write(`<p>Su saldo actual es ${saldo}</p>`);
// }else if(opcion === `2`){
//     document.write(`<p>Quiere ingresar dinero</p>`);
// }else if(opcion === `3`){
//     document.write(`<p>Quiere extraer dinero dinero</p>`);
// }else alert{(`Seleccionó una opcion erronea`)   ;
//  }

switch (opcion) {
  case `saldo`:
  case `consultar saldo`:
  case `1`:
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
    break;
  case `2`:
    document.write(`<p>Quiere ingresar dinero</p>`);
    break;
  case `3`:
    document.write(`<p>Quiere extraer dinero dinero</p>`);
    break;
  default:
    alert(`Seleccionó una opcion erronea`);
}

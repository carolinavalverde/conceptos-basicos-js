const opcion = prompt(
  `Seleccione una opción: 1- consulte el saldo, 2- inserte dinero, 3- extraiga dinero`
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

do {
  let opcion = prompt(
    "Seleccione una opcion: 1- consulte el saldo, 2- ingrese dinero, 3- extraiga dinero"
  );

  console.log(opcion.toLowerCase());
  opcion = opcion.toLowerCase(); //transformo un string a minusculas
  switch (opcion) {
    case "saldo":
    case "consultar saldo":
    case "1":
      document.write(`<p>Su saldo actual es $${saldo}</p>`);
      console.log(`Su saldo actual es de $${saldo}`);
      break;
    case "2":
      let deposito = parseInt(prompt("cuanto deseas depositar?:"));
      console.log(isNaN(`hola`)); //si no es un numero devuelve true
      console.log(isNaN(100)); //si es un numero devuelve false
      if (!isNaN(deposito) && deposito > 0) {
        // otra opcion
        // if (isNaN(deposito))===false {
        // }
        saldo += deposito; //saldo = saldo + deposito
        document.write(
          `<p>Has depositado $${deposito}. Su saldo actual es $${saldo}</p>`
        );
        console.log(
          `<p>Se ingresó un $${deposito}, su saldo acual es ${saldo}</p>`
        );
      } else {
        document.write("<p>Número no válido</p>");
      }

      break;
    case `3`:
      document.write(`<p>Quiere extraer dinero dinero</p>`);
      console.log(`<p>Extraiga dinero</p>`);
      break;
    default:
      alert("Selecciono una opcion erronea");
  }
} while (confirm("¿Desea realizar otra operacion?"));

// const opcion = prompt(
//   'Seleccione una opción: 1- Consultar saldo, 2- Insertar dinero, 3- Extraer dinero'
// );

// let saldo = 500;
// const opcionMin = opcion.toLowerCase();

// switch (opcionMin) {
//   case '1':
//   case 'consultar saldo':
//     document.write(`<p>Su saldo actual es $${saldo}</p>`);
//     break;
//   case '2':
//   case 'insertar dinero':
//     const cantidad = parseFloat(prompt('Ingrese la cantidad a depositar:'));
//     if (!isNaN(cantidad) && cantidad > 0) {
//       saldo += cantidad;
//       document.write(`<p>Has depositado $${cantidad}. Su saldo actual es $${saldo}</p>`);
//     } else {
//       document.write('<p>Número no válido</p>');
//     }
//     break;
//   case '3':
//   case 'extraer dinero':
//     const retiro = parseFloat(prompt('Ingrese la cantidad a retirar'));
//     if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
//       saldo -= retiro;
//       document.write(`<p>Has retirado $${retiro}. Su saldo actual es $${saldo}</p>`);
//     } else if (retiro > saldo) {
//       document.write('<p>No tiene saldo suficiente para retirar</p>');
//     } else {
//       document.write('<p>Número no válido</p>');
//     }
//     break;
//   default:
//     alert('Seleccionó una opción errónea');
// }

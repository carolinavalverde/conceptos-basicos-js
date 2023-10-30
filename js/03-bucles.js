/*
while(condicion logica){
todo el codigo que quiero ejecutar varias veces 
agregar algo si la condicion no se cumple
}
*/

let renglon = 1
//  document.write("<p>este es el renglon número + renglon + </p>");
 
while ( renglon <=20){
document.write(`<p>este es el renglon número ${renglon} </p>`);
renglon++;
// renglon = renglon + 1;
}

/*
do
{
todo el codigo que quiero ejecutar varias veces 
agregar algo si la condicion no se cumple
} (condicion logica)
*/

let contador = 100 
 
do{
document.write(`<p>este es el renglon número ${contador} (do-while) </p>`);
contador++;
}while(contador <= 10)


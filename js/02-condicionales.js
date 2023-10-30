/*
if(condicion logica){
    codigo que quiero que se ejecute si la condicion se cumple
}
*/

//Solicite la edad al usuario e indique si debe votar
//16-18 optativo
//18-70 obligatorio

const edad = parseInt(prompt('Ingrese su edad'));

if( edad >=18 && edad <=70){
    document.write('<p>Debe votar</p>');
}else if ((edad >= 16 && edad <18) ||70) {
    document.write('<p>Es optativo votar</p>'); 
}else{
    document.write('<p>No debe votar</p>'); 
}

/*
if(condicion logica){
    codigo que quiero que se ejecute si la condicion se cumple
}
*/

//Solicite la edad al usuario e indique si debe votar
//16-18 optativo
//18-70 obligatorio

let edad = parseInt(prompt('Ingrese su edad'));

if( edad >=18){
    document.write('<p>Debe votar</p>');
}else{
    document.write('<p>No debe votar</p>'); 
}

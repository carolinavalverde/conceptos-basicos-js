//notacion literal: deja expresar un objeto

const usuario = {
    //propiedades clave: valor 
    nombre: `Juan`, 
    edad: 18,
    mail: `juan@mail.com`,
    apellido: `Perez`,
    password: `12345fgg`,
    nickname: `el juancho`,
    //metodos
    login: function (){
        console.log(this);
        document.write(`<p>El usuario "${this.nickname}" fue logueado</p>`)
    },
    logout: () =>{
        console.log(this);//no funciona xq no entra en el scope de la variable, devuelve windows
        document.write(`<p>El usuario fue deslogueado</p>`)
    }
}

console.log(usuario);
document.write(usuario);
document.write(`<h2>Usuario: ${usuario.nickname}<h2>`);
document.write(`<p>Usuario: ${usuario.apellido}, ${usuario.nombre}<p>`);
document.write(`<p>Edad: ${usuario["edad"]}<p>`);
document.write(`<p>Edad: ${usuario["Edad"]}<p>`);

//modificar propiedad del objeto
usuario.edad = 25;

document.write(`<p>Edad: ${usuario["edad"]}<p>`);

//agregar una propiedad nueva al objeto
usuario.fotoPerfil = `http://127.0.0.1:5500/index.html`;
console.log(usuario);

//borrar una propiedad de un objeto
delete usuario.apellido;
console.log(usuario);

//usar los metodos del objeto
usuario.login();
usuario.logout();






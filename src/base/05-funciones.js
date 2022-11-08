// Funciones en JS
const saludar=  function (nombre) {
    return ` Hola, ${nombre} `;

}

// fuciones de flecha o lamda

const saludar2= (nombre)=> `Hola, ${nombre}`;

const saludar3= (nombre)=>{
    return `Hola, ${nombre}`
    };
console.log(saludar('Dario'));

console.log(saludar2('Rosero'));

console.log(saludar3('Maria'));

const getUser= () =>({
    uid: 'ABC123',
    username: 'El_Perez'
});

console.log(getUser());

//1. transformar a una función flecha
//2. Tiene que retornar un objeto implícito
// 3. pruebas
function getUsuarioActivo( nombre){
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const getUsuarioActivo1= (nombre)=>({
    uid:'ABC123',
    username: nombre
});
const usuarioActivo= getUsuarioActivo('Edwin');
console.log(usuarioActivo);

const usuarioActivo1= getUsuarioActivo1('Diana');
console.log(usuarioActivo1)
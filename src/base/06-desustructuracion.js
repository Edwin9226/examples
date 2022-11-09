
//Desustructuración 
// Asignación Desestructurante.

const person ={
    name: 'Dario',
    old: 22,
    password: 'Iroman',
    // rango: 'soladado'
}

// const {name: name1, old: old1, password: password1} =person;
// console.log(name1);
// console.log(old1);
// console.log(password1);


// desestructuracion en el argumento
const retornaPerson= ({password, name, old, rango= 'Capitán'})=> {
    // const {name, password, old}= usuario;

    // console.log(name, old, rango);
    return{
        nombreClave: password, 
        anios: old,
        latlng:{
            lat:14.1232,
            lng: -12.3232
        }

    }
}

const {nombreClave, anios, latlng}= retornaPerson(person);
const { lat, lng}= latlng;
console.log(nombreClave, anios);
console.log(lat, lng);
import { getHeroeById } from "../base/09-imports-exports-mul";



//Promessas
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//resolve cuando la promise es corecta, reject cuando la promesa no se cumple.
//tareas asyncronas
// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {

//         const heroe= getHeroeById(2);
//         // console.log(heroe);
//          resolve( heroe);
//         // console.log('dos segundos despues.')
//     }, 2000);
// }); 

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
const getHeroeByIdAsync=(id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
    
            const heroe= getHeroeById(id);
            // console.log(heroe);
            if (heroe) { 
            resolve( heroe);
            } else {
                reject ('no se encontro el héreo');
            }
            }, 2000);
    });     
}


getHeroeByIdAsync(10)
.then(heroe => console.log('heroe', heroe))
.catch(err=>console.warn(err));
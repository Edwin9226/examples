const avengers=['Holk', 'ironman', 'Capitán America','Batmanz'];

// console.log(avengers[0]);
// console.log(avengers[1]);
// console.log(avengers[2]);
// console.log(avengers[3]);

const [,p2,p3]= avengers;
console.log(p2, p3)

const returnArray= ()=>{
    return ['ABC', 123];
}

const [letters, numbers]= returnArray();
console.log(letters, numbers);

// Tarea
 const usoEstados= (valor) =>{
    return [ valor, ()=>{console.log('Hola Mundo')}];
 }

 const [nombre, menssage] = usoEstados('Robin');
 
 console.log(nombre);
 menssage();

const  arr= [34, 45,66,20,15];

// agregar al final
arr.push(25)
console.log("Agregar final",arr);

// agregar al medio
arr.splice(3,0, 38);
console.log("Agregar medio",arr);

// agregar al inicio
arr.splice(arr.findIndex(e => e === 34), 0, 40);
console.log("Agreagar al inicio", arr);

// eliminar al final
arr.pop()
console.log("Eliminar final",arr);

// eliminar al medio
arr.splice(arr.indexOf(66), 1);
console.log("Eliminar en medio",arr);

// eliminar al inicio
arr.splice(arr.indexOf(40),1);
console.log("Eliminar al inicio", arr);


const names= ['Maria', 'Daniela', 'Denys', 'Pablo', 'Polo'];
//filtrar con letra o los nombres 
const res= names.filter(item=>item.includes('o'));
console.log(res)

// ordenar arreglo
const ordenar= ['Maria', 'Daniela', 'Denys', 'Pablo', 'Polo'];
const ord= ordenar.sort();
console.log(ord);
// tamaño arreglo
console.log(res.length)

let utiles = [
    'lapiz',
    'lapiz',
    'borrador',
    'sacapuntas',
    'regla',
    'regla',
    'borrador',
    'lapiz',
  ];



const resultado = utiles.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
console.log(resultado)

 let users=[
  {firstName:'Rocio', lastName:'Rosero', gender: 'F', old: 25 , marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
  {firstName:'Maria', lastName:'Pupiales', gender: 'F', old: 35, marca: 'Audi', modelo: 'A4',  year: 2015, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
  {firstName:'Daniela', lastName:'Pinchao', gender: 'F', old: 15,marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
  {firstName:'Juan', lastName:'Mueses', gender: 'F', old: 20, marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'}]; 
  
  let arrnew= users.map(user=> user.firstName+ ' '+ user.lastName);
  // console.log(arrnew);
  

  // filtrar os mayores a 20.
  // let arrMayor= users.filter(user=>user.old>20);
  // console.log(arrMayor
  // )

  //filtrar los autos rojos
  let arrrojos= users.filter(rojo=> rojo.color==='Rojo');
    // console.log(arrrojos);

    // sacar los autos mayor 2012 y menor 2019
    const autosRango= users.filter(auto=>auto.year>2012 && auto.year<2019);
  console.log(autosRango);
  // eliminar elementos de una array basado en un valor. indexOf


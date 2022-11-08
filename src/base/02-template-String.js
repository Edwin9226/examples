const nombre= 'Edwin';
const apellido= 'Pinchao';

const nombreeCompleto= ` ${nombre} ${apellido}`;

console.log(nombreeCompleto);

if (true) {
    const nombre= ' Dario';
    console.log(nombre)
}

function getNombre(nombre){
return 'Hola' + nombre;
}

console.log(` Este es mi nombre : ${getNombre(nombreeCompleto)} `);
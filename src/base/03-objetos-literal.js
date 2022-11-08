
const person= {
    name: 'Edwin',
    lastname: 'Pinchao',
    edad: 30,
    address:{

        city:"Ibarra",
        zip: 55523132,
        lat: 14.3232,
        lng: 34.9233321
    }
};

console.log({person});

const person2= {...person};
person2.name= 'Daniel';
console.log(person2);


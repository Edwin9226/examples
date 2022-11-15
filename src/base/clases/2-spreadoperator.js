let numbers=[1,2,3,4,5];
let numbers1=[6,7,8,9,0];

const combine= numbers.concat(numbers1);
console.log(combine);

const spread=[...numbers, ...numbers1];
console.log(spread);

const hero={
    name:'Batman',
    realName:'BruceWayne',
    city:' Gotham',
    age:30,
    address:{
      city:{
        born:'colombia',
        live:'ny'
      },
    },
  
  };
  
  const {name,realName, ...rest}= hero;
  console.log(rest);
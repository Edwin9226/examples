//desestructuracion

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
      city: {
        lives: 'Gotham',
        born:'NY'}
    }
  };
  // leave:
  
  const {name, realName, address}= hero;
  const {city, born}= address;
  console.log(name, realName);
  console.log(city, born);
  
  // const hero = {
  //   name: 'Batman',
  //   realName: 'Bruce Wayne',
  //   address: {
  //     city: {
  //       born:'Gotham',
  //       lives:'NY'
  //     }
  //   }
  // };
  // const {address:{city:{born}}}=hero
  // const {address:{city:{lives}}}=hero
  
  // console.log(born)
  
  // const { address: { city: { born, lives } } } = hero;
  
let arr =[ 1,2,3];

let arr2= [...arr];
console.log(arr);
arr2.push(4);
console.log(arr2);
console.log(arr);


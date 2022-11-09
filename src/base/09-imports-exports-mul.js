import heroes, { owners } from "./data/heroes";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log();

const getHeroeById=(ids)=>{
    return heroes.find(({id})=> id === ids);
}

console.log(getHeroeById(2));

const getHeroeByOwner =(owner1)=>{
    return heroes.filter(({owner})=> owner === owner1);
}

console.log(getHeroeByOwner('DC'));

console.log(owners)
import { heroes } from './data';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log(heroes);

const getHeroeById1=(ids)=>{
    return heroes.find(({id})=> id === ids);
}

console.log(getHeroeById1(2));

const getHeroeByOwner =(owner1)=>{
    return heroes.filter(({owner})=> owner === owner1);
}

console.log(getHeroeByOwner('DC'));
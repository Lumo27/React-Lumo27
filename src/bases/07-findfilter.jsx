import {heroes} from '../data/heroes'

// heroes.forEach(element => {
//     const {id, name, owner} = element;
//     console.table(id,name,owner)
// });

export const getHeroeById = (idbusca) => {
    return heroes.find((heroe)=>heroe.id ===idbusca);
    
};
// console.log(getHeroeById(1))

export const getHeroeByOwner = (ownerbusca) => {
    return heroes.filter((heroe)=>heroe.owner===ownerbusca)
}
// console.log(getHeroeByOwner('DC'));


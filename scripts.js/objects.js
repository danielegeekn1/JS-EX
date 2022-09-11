//richiamare proprietà e valori tramite la parola chiave Object, in modo celere
let hero={
    name:'Batman',
    weapon:'Batarang',
    vehicle:{
        type:'car',
        model:'Batmobile',
    },
};

console.log(Object.values(hero));
console.log(Object.keys(hero));
console.log(Object.entries(hero));
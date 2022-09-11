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

//esempio di oggetto 
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };
  console.log(Object.entries(person));//questa riproduce proprietà e valodi dell'oggetto, ma non quelli all'interno della funzione

  console.log(person.bio());// questo può reinderizzare il risultato della funzione

  //altro esempio con oggetti in JS
  const bigname ={

            name:{
                first:'Daniele',
                second:'Giulia',
            }
  }
  console.log(bigname.name.first);
  console.log(bigname.name.second);


  //un'altro modo di richiamare proprietà e valori di un'oggetto è con le parentesi quadre, in questo modo


   let superHeroes = {
    name:{
        first:'Batman',
        second:'Superman '
    }
}
superHeroes['name']['first'];//questo mostra sempre la prima proprietà dell'oggetto name, nidificato nell'oggetto superHeroes



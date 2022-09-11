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
//esempio di oggetto costruttore, che può contenere più oggetti o funzioni in essa
const person1 = {
    name: 'Chris',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  const person2 = {
    name: 'Deepti',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }

console.log(Object.entries(person1));
person1.introduceSelf();
person2.introduceSelf();

//inserire un'oggetto all'interno di una funzione per creare più e più valori
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelff = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
  }
  //questa crea due proprietà:nanme e un metodo introduceSelff
//creare altri oggetti da essa

const jonny = createPerson('Salva');
jonny.name;
jonny.introduceSelff();

const floki = createPerson('Frankie');
floki.name;
floki.introduceSelff();

//altro esempio di costruttore
//il nome di un'oggetto costruttore è buona pratica che inizi sempre con la prima lettera maiuscola
function People(name) {
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  //all'interno di esso usiamo this.
  //sintassi per associare proprietà e valori è differente come possiamo notare

  //per richiamare l'oggetto costruttore People faremo cosi
  const salva = new People('Salva');
  salva.name;
  salva.introduceSelf();
  
  const frankie = new People('Frankie');
  frankie.name;
  frankie.introduceSelf();
  

  

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
//const person2 = Object.assign({}, person1)
//inizio deep copy con metodo 'JSON stringify
//json stringify crea una stringa, json permette di riempirla, uso entrambi associandoli ad una variabile
let person2 = JSON.parse(JSON.stringify(person1));

//da ora le modifiche apportate alle proprietà della variabile person2 non avranno effetto su quelle di person1

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);
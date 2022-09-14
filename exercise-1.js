const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

//la ragione per cui il valore associato a person2.firstName cambia anche quello di person1.firstName è il seguente
//gli oggetti sono considerati reference values, non primitive values, e come tali, hanno comportamenti differenti
//dal momento un'oggetto è associato ad un'altro il programma non crea una mera copia, ma copia solo il puntatore che reinderizza alle proprietà dell'oggetto
//di conseguenza per quanto person2 è associato a person1 questo significa solo che entrambi punteranno alle stesse proprietà dell'oggetto, ovvero person2 punterà alle stesse proprietà di person1

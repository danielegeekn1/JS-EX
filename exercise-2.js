const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1
//const person2 = person1;
    //creo una clone vuoto per spostare in esso le proprietà di person1 in esso
    const person2 = {};

    //sposto tutte le proprietà ( chiavi e valori) di person1 in questo oggetto vuoto person2 appena creato
    for (const key in person1){
      person2[key] = person1[key];
    }

    //cambio solo il nome di person2, in quanto ora mi è possibile essendo esso un oggetto indipendente
    person2.firstName = 'Simon'


console.log(person1);
console.log(person2);

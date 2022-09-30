const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

/*function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(persons.find((item) => item.id === id)), 1000);
  });
}*/
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    persons.find((item) => item.id === id);
    if (id <= 3) {
      resolve(persons);
    } else {
      reject("Promise rejected");
    }
  });
}

fetchPersonById(1).then((person) => console.log(person));
fetchPersonById(2).then((person) => console.log(person));
fetchPersonById(3).then((person) => console.log(person));
fetchPersonById(4).catch((err) => console.log(err));

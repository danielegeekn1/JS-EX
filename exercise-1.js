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

function fetchPersonById(id) {
  // code here
  return new Promise((resolve) => {
    id = id;
    if (id === 1) {
      resolve(persons[0]);
    } else if (id === 2) {
      resolve(persons[1]);
    } else if (id === 3) {
      resolve(persons[2]);
    }
  });
}

async function alias() {
  let firstId = await fetchPersonById(1);
  console.log(firstId);
  let secondId = await fetchPersonById(2);
  console.log(secondId);
  let thirdId = fetchPersonById(3);
  console.log(thirdId);
}

console.log(alias());

// code here

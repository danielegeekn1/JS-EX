const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { id: ID, firstName: First, lastName: Surname, age: Age } = person;
console.log(ID, First, Surname, Age);

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const id = person.id;
/*const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age,
};*/

const personInfo = JSON.stringify(person, ["firstName", "lastName", "age"]);

console.log(person.id);
console.log(personInfo);

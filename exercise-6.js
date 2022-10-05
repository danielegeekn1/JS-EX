function getKeys(key) {
  // ...
  let array = [];
  for (let value in key) {
    array.push(value);
  }
  return array;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);

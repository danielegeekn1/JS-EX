function calculateAverageAge(persons) {
  // ...

  sum =
    persons[0].age +
    persons[1].age +
    persons[2].age +
    persons[3].age +
    persons[4].age +
    persons[5].age +
    persons[6].age +
    persons[7].age +
    persons[8].age +
    persons[9].age;

  calc = sum / 10;
  return calc;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
